package gerador.publicapaginavendapropria.passo.impl;


import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

import br.com.gersis.loopback.modelo.ImagemPaginaVenda;
import br.com.gersis.loopback.modelo.PaginaVendaPropria;
import br.com.gersis.loopback.modelo.PosicaoElementoPaginaVenda;
import br.com.gersis.loopback.modelo.VersaoPaginaVenda;
import gerador.publicapaginavendapropria.passo.GeraArquivoVersao;



public class GeraArquivoVersaoImpl extends GeraArquivoVersao {


	private String DIRETORIO_TEMP = "/home/usuario/aplicacoes/MarketingDigital/pagina-venda-temp";
	
	
	
	@Override
	protected boolean executaCustom(PaginaVendaPropria paginaCorrente, VersaoPaginaVenda versaoCompleta) {
		String conteudoPagina = this.trocaItemVariavel(versaoCompleta);
		String conteudoComImagem = this.trocaImagem(conteudoPagina, paginaCorrente.getImagemPaginaVenda());
		try {
			gravaTemp(conteudoComImagem, paginaCorrente.getCodigoUrl());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return true;
	}


	
	private void gravaTemp(String conteudoPagina, String nome) throws IOException {
		String currentDirectory = System.getProperty("user.dir");

	    // Exibe o diretório de trabalho atual
	    System.out.println("Diretório de Trabalho Atual: " + currentDirectory);
		
		File diretorioTemp = new File(DIRETORIO_TEMP);
         if (!diretorioTemp.exists()) {
             diretorioTemp.mkdirs();
         }

         // Cria o arquivo no diretório com o conteúdo da variável conteudoPagina
         File arquivoTemp = new File(diretorioTemp, nome + ".html");
         FileWriter writer = new FileWriter(arquivoTemp);
         writer.write(conteudoPagina);
         writer.close();
	}

	
	private String trocaImagem(String conteudo, ImagemPaginaVenda imagem) {
		String nomeImagem = imagem.getUrlFinal();
		conteudo = conteudo.replaceAll("\\{imagem-fundo\\}", nomeImagem);
		return conteudo;
	}
	 
	private String trocaItemVariavel(VersaoPaginaVenda versao) {
		String saida = versao.getModeloPaginaVenda().getCodigoFonte();
		List<PosicaoElementoPaginaVenda> elementos = versao.getModeloPaginaVenda().getPosicaoElementoPaginaVendas();
		for (PosicaoElementoPaginaVenda elemento : elementos) {
			if (elemento.getElementoModeloPaginaVenda().getConteudoElementos().size()==1) {
				String nomeVariavel = elemento.getElementoModeloPaginaVenda().getNomeVariavel();
				String conteudo = elemento.getElementoModeloPaginaVenda().getConteudoElementos().get(0).getValor();
				conteudo = conteudo.replace("\n", "<br>");
				saida = saida.replaceAll("\\{" + nomeVariavel + "\\}", conteudo);
			}
		}
		return saida;
	}
}

