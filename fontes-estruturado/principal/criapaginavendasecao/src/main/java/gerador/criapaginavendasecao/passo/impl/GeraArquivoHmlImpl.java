package gerador.criapaginavendasecao.passo.impl;


import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.util.List;

import br.com.gersis.loopback.modelo.PaginaVendaAberta;
import br.com.gersis.loopback.modelo.PaginaVendaAbertaSecao;
import gerador.criapaginavendasecao.passo.GeraArquivoHml;



public class GeraArquivoHmlImpl extends GeraArquivoHml {

	private final String ARQUIVO = "C:\\Users\\paulo\\OneDrive\\Documents\\Marketing Digital\\PaginasVendas\\index.html";
	
	@Override
	protected boolean executaCustom(PaginaVendaAberta paginaCorrente) {
		this.gerarArquivoTxt(paginaCorrente, ARQUIVO);
		return true;
	} 

	
	  public static void gerarArquivoTxt(PaginaVendaAberta paginaCorrente, String nomeArquivo) {
	        BufferedWriter writer = null;
	        try {
	            // Cria o FileWriter e o BufferedWriter
	            //writer = new BufferedWriter(new FileWriter(nomeArquivo));
	            writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(nomeArquivo), "UTF-8"));
	            
	            
	            writer.write(paginaCorrente.getHtmlInicial());
	            List<PaginaVendaAbertaSecao> itens = paginaCorrente.getPaginaVendaAbertaSecaos();
	            // Itera sobre o array de strings e escreve cada linha no arquivo
	            
	            writer.write("	<!-- Estilos CSS -->\n");
	            writer.write("	<style>\n");
	            writer.write(paginaCorrente.getCssGlobal());
	            for (PaginaVendaAbertaSecao linha : itens) {
	            	if (linha.getCss().length()>0) {
	            		writer.write(linha.getCss());
	            		writer.newLine();  // Adiciona uma nova linha após cada string
	            	}
	            }
	            writer.write("	</style>\n");

	            writer.write("	<body>\n");
	            for (PaginaVendaAbertaSecao linha : itens) {
	            	System.out.println(linha.getNome());
	            	if (linha.getHtml().length()>0) {
	            		writer.write(linha.getHtml());
	            		writer.newLine();  // Adiciona uma nova linha após cada string
	            	}
	            }
	            writer.write(paginaCorrente.getHtmlFinal().trim());
	            
	            System.out.println("Arquivo gerado com sucesso!");

	        } catch (IOException e) {
	            e.printStackTrace();  // Trata exceções de I/O
	        } finally {
	            try {
	                // Fecha o BufferedWriter no final para liberar os recursos
	                if (writer != null) {
	                    writer.close();
	                }
	            } catch (IOException e) {
	                e.printStackTrace();
	            }
	        }
	    }

}

