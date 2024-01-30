package gerador.criapaginavenda.passo.impl;


import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

import br.com.gersis.loopback.modelo.PosicaoElementoPaginaVenda;
import br.com.gersis.loopback.modelo.VersaoPaginaVenda;
import gerador.criapaginavenda.passo.GeraArquivoVersao;



public class GeraArquivoVersaoImpl extends GeraArquivoVersao {
	
	
	private String DIRETORIO_TEMP = "pagina-venda-temp";

	@Override
	protected boolean executaCustom(VersaoPaginaVenda versaoCorrenteCompleta) {
		String conteudoPagina = this.trocaItemVariavel(versaoCorrenteCompleta);
		conteudoPagina = this.outrasTrocas()
		try {
			gravaTemp(conteudoPagina);
		} catch (Exception e) {
			e.printStackTrace();
			System.exit(-1);
		}
		return true;
	}
	
	private void gravaTemp(String conteudoPagina) throws IOException {
		 File diretorioTemp = new File(DIRETORIO_TEMP);
         if (!diretorioTemp.exists()) {
             diretorioTemp.mkdirs();
         }

         // Cria o arquivo no diretório com o conteúdo da variável conteudoPagina
         File arquivoTemp = new File(diretorioTemp, "index.html");
         FileWriter writer = new FileWriter(arquivoTemp);
         writer.write(conteudoPagina);
         writer.close();
	}

	private void outrasTrocas()
	
	 
	private String trocaItemVariavel(VersaoPaginaVenda versao) {
		String saida = versao.getModeloPaginaVenda().getCodigoFonte();
		List<PosicaoElementoPaginaVenda> elementos = versao.getModeloPaginaVenda().getPosicaoElementoPaginaVendas();
		for (PosicaoElementoPaginaVenda elemento : elementos) {
			if (elemento.getElementoModeloPaginaVenda().getConteudoElementos().size()==1) {
				String nomeVariavel = elemento.getElementoModeloPaginaVenda().getNomeVariavel();
				String conteudo = elemento.getElementoModeloPaginaVenda().getConteudoElementos().get(0).getValor();
				conteudo = conteudo.replace("\n", "<br>");
				saida = saida.replace("---" + nomeVariavel + "---", conteudo);
			}
		}
		return saida;
	}
	
	
	
	

}

