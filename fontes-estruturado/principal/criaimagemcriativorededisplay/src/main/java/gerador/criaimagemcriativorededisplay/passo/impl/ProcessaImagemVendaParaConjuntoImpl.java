package gerador.criaimagemcriativorededisplay.passo.impl;


import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.URL;

import br.com.gersis.loopback.modelo.CriativoAnuncio;
import br.com.gersis.loopback.modelo.ImagemConjunto;
import gerador.criaimagemcriativorededisplay.passo.*;



public class ProcessaImagemVendaParaConjuntoImpl extends ProcessaImagemVendaParaConjunto {
	
	private final String TEMP_FILE = "/home/usuario/aplicacoes/MarketingDigital/fontes-estruturado/principal/criaimagemcriativorededisplay/imagens";
	private final String diretorioRemoto = "";
	private final String urlRemoto = "";
	private String PATH_IMAGENS = "/var/www/palfmarketing.online/www/criativos";
	private String PREFIXO_URL = "http://www.palfmarketing.online/criativos";


	@Override
	protected boolean executaCustom(ImagemConjunto imagemConjuntoCorrente) {
		
		try {
			String imagemQuadrada = this.geraImagemQuadrada(imagemConjuntoCorrente);
			String destinoQuadrada = PATH_IMAGENS + "/" + imagemConjuntoCorrente.getImagemPaginaVenda().getCodigoHexa() + "-criativo-google-quadrada.jpg";
			String imagemQuadradaUrl = PREFIXO_URL + "/" + imagemConjuntoCorrente.getImagemPaginaVenda().getCodigoHexa() + "-criativo-google-quadrada.jpg";
			this.enviaParaServidor(imagemQuadrada, destinoQuadrada);
			//String imagemDeitadaTextoEsquerda = this.geraImagemDeitadaTextoEsquerda(imagemConjuntoCorrente);
			String imagemDeitadaTextoDireita = this.geraImagemDeitadaTextoDireita(imagemConjuntoCorrente);
			String destinoDeitada = PATH_IMAGENS + "/" + imagemConjuntoCorrente.getImagemPaginaVenda().getCodigoHexa() + "-criativo-google-deitada.jpg";
			String imagemDeitadaUrl = PREFIXO_URL + "/" + imagemConjuntoCorrente.getImagemPaginaVenda().getCodigoHexa() + "-criativo-google-deitada.jpg";
			this.enviaParaServidor(imagemDeitadaTextoDireita, destinoDeitada);
			this.saidaImagemConjuntoCorrente = imagemConjuntoCorrente;
			this.saidaImagemConjuntoCorrente.setUrlImagemQuadrada(imagemQuadradaUrl);
			this.saidaImagemConjuntoCorrente.setUrlImagemDeitada(imagemDeitadaUrl);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	} 

	
	
	

	protected String geraImagemQuadrada(ImagemConjunto criativo) throws Exception {
		if (criativo.getImagemPaginaVenda()==null) {
			throw new RuntimeException("Criativo " + criativo.getNome() + " sem imagem");
		}
		String imageUrl = criativo.getImagemPaginaVenda().getUrlFinal();
		String imagemEntrada = TEMP_FILE + "/" + criativo.getImagemPaginaVenda().getCodigoHexa() + ".png"; 
		String imagemSaida = TEMP_FILE + "/" + criativo.getImagemPaginaVenda().getCodigoHexa() + "-criativo-google-quadrada.jpg";

        // Criando um objeto File com o caminho do arquivo
        File arquivo = new File(imagemSaida);
        
        // Verificando se o arquivo existe
        if(arquivo.exists()) {
            // Excluindo o arquivo
            if(arquivo.delete()) {
                System.out.println("Arquivo excluído com sucesso.");
            } else {
                System.out.println("Não foi possível excluir o arquivo.");
            }
        } else {
            System.out.println("O arquivo não existe no diretório especificado.");
        }
		
		
		// Obter a imagem da URL
		URL url = new URL(imageUrl);
		InputStream inputStream = url.openStream();
		OutputStream outputStream = new FileOutputStream(imagemEntrada);

		byte[] buffer = new byte[2048];
		int length;

		while ((length = inputStream.read(buffer)) != -1) {
			outputStream.write(buffer, 0, length);
		}

		inputStream.close();
		outputStream.close();
		
		if (criativo.getTextoCopyLinha1()!=null) {
		  
		  String mensagem = criativo.getTextoCopyLinha1() + "\\n" + criativo.getTextoCopyLinha2();
		
		  String imagem_pequena_redimensionada= criativo.getLogoGrupoWhatsapp();
		  
		  //String command = "convert " + imagemEntrada + " -gravity south -splice 0x180 \\( -size 1240x180 xc:#000000 \\) -composite -fill white -font " + criativo.getFonteLocal().getArquivo() + " -pointsize 58 -annotate +0+20 \"" + mensagem + "\" " + imagemSaida ;

		  // colocando um posicionamento north / sotuh
		  String command = "convert " + imagemEntrada + " -gravity north -splice 0x186 \\( -size 1240x186 xc:" + criativo.getFundoColor() + " \\) -composite -fill \"" + criativo.getFontColor() + "\" -font " + criativo.getFonteLocal().getArquivo() + " -pointsize 58 -annotate +0+20 \"" + mensagem + "\" " + imagemSaida ;
		  command = "convert " + imagemEntrada + " -gravity north -splice 0x186 \\( -size 1240x186 xc:" + criativo.getFundoColor() + " \\) -composite -fill \"" + criativo.getFontColor() + "\" -font " + criativo.getFonteLocal().getArquivo() + " -pointsize 58 -annotate +0+20 \"" + mensagem + "\"  -gravity center -background \"" + criativo.getFundoColor() + "\" -extent 1210x1210 " + imagemSaida ;
		  command = "convert " + imagemEntrada + " -gravity north -splice 0x186 \\( -size 1240x186 xc:" + criativo.getFundoColor() + " \\) -composite -fill \"" + criativo.getFontColor() + "\" -font " + criativo.getFonteLocal().getArquivo() + " -pointsize 58 -annotate +0+20 \"" + mensagem + "\"  -gravity center -background \"" + criativo.getFundoColor() + "\" -extent 1210x1210 " + imagem_pequena_redimensionada + " -gravity southeast -geometry +10+10 -composite  " + imagemSaida ;

		  
	      System.out.println(command);
		  ProcessBuilder processBuilder = new ProcessBuilder("/bin/bash", "-c", command);
          Process process = processBuilder.start();

          BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
          String line;
          while ((line = reader.readLine()) != null) {
              System.out.println(line);
          }

          int exitVal = process.waitFor();
          if (exitVal == 0) {
              System.out.println("Command executed successfully!");
          } else {
              // Something went wrong
              System.out.println("Error in executing command.");
          }

		}
		return imagemSaida;
	}

	
	protected String geraImagemDeitadaTextoEsquerda(ImagemConjunto criativo) throws Exception {
		String imageUrl = criativo.getImagemPaginaVenda().getUrlFinal();
		String imagemEntrada = TEMP_FILE + "/" + criativo.getImagemPaginaVenda().getCodigoHexa() + ".png"; 
		String imagemSaida = TEMP_FILE + "/" + criativo.getImagemPaginaVenda().getCodigoHexa() + "-criativo-google-deitada.jpg";

        // Criando um objeto File com o caminho do arquivo
        File arquivo = new File(imagemSaida);
        
        // Verificando se o arquivo existe
        if(arquivo.exists()) {
            // Excluindo o arquivo
            if(arquivo.delete()) {
                System.out.println("Arquivo excluído com sucesso.");
            } else {
                System.out.println("Não foi possível excluir o arquivo.");
            }
        } else {
            System.out.println("O arquivo não existe no diretório especificado.");
        }
		
		
		// Obter a imagem da URL
		URL url = new URL(imageUrl);
		InputStream inputStream = url.openStream();
		OutputStream outputStream = new FileOutputStream(imagemEntrada);

		byte[] buffer = new byte[2048];
		int length;

		while ((length = inputStream.read(buffer)) != -1) {
			outputStream.write(buffer, 0, length);
		}

		inputStream.close();
		outputStream.close();
		
		if (criativo.getTextoCopyLinha1()!=null) {
		  
		  String mensagem = criativo.getTextoCopyLinha1() + "\\n" + criativo.getTextoCopyLinha2();
		
		  String imagem_pequena_redimensionada="/home/usuario/Imagens/Criativos/imagem_pequena_redimensionada.png";
		  
		  //String command = "convert " + imagemEntrada + " -gravity south -splice 0x180 \\( -size 1240x180 xc:#000000 \\) -composite -fill white -font " + criativo.getFonteLocal().getArquivo() + " -pointsize 58 -annotate +0+20 \"" + mensagem + "\" " + imagemSaida ;

		  // colocando um posicionamento north / sotuh
		  String command = "convert " + imagemEntrada + " -gravity north -splice 0x186 \\( -size 1240x186 xc:" + criativo.getFundoColor() + " \\) -composite -fill \"" + criativo.getFontColor() + "\" -font " + criativo.getFonteLocal().getArquivo() + " -pointsize 58 -annotate +0+20 \"" + mensagem + "\" " + imagemSaida ;
		  command = "convert " + imagemEntrada + " -gravity north -splice 0x186 \\( -size 1240x186 xc:" + criativo.getFundoColor() + " \\) -composite -fill \"" + criativo.getFontColor() + "\" -font " + criativo.getFonteLocal().getArquivo() + " -pointsize 58 -annotate +0+20 \"" + mensagem + "\"  -gravity center -background \"" + criativo.getFundoColor() + "\" -extent 1210x1210 " + imagemSaida ;
		  command = "convert " + imagemEntrada + " -gravity north -splice 0x186 \\( -size 1240x186 xc:" + criativo.getFundoColor() + " \\) -composite -fill \"" + criativo.getFontColor() + "\" -font " + criativo.getFonteLocal().getArquivo() + " -pointsize 58 -annotate +0+20 \"" + mensagem + "\"  -gravity center -background \"" + criativo.getFundoColor() + "\" -extent 1210x1210 " + imagem_pequena_redimensionada + " -gravity southeast -geometry +10+10 -composite  " + imagemSaida ;

		  
	      System.out.println(command);
		  ProcessBuilder processBuilder = new ProcessBuilder("/bin/bash", "-c", command);
          Process process = processBuilder.start();

          BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
          String line;
          while ((line = reader.readLine()) != null) {
              System.out.println(line);
          }

          int exitVal = process.waitFor();
          if (exitVal == 0) {
              System.out.println("Command executed successfully!");
          } else {
              // Something went wrong
              System.out.println("Error in executing command.");
          }

		}
		return imagemSaida;
	}

	
	protected String geraImagemDeitadaTextoDireita(ImagemConjunto criativo) throws Exception {
		String imageUrl = criativo.getImagemPaginaVenda().getUrlFinal();
		String imagemEntrada = TEMP_FILE + "/" + criativo.getImagemPaginaVenda().getCodigoHexa() + ".png"; 
		String imagemSaida = TEMP_FILE + "/" + criativo.getImagemPaginaVenda().getCodigoHexa() + "-criativo-google-deitada.jpg";

        // Criando um objeto File com o caminho do arquivo
        File arquivo = new File(imagemSaida);
        
        // Verificando se o arquivo existe
        if(arquivo.exists()) {
            // Excluindo o arquivo
            if(arquivo.delete()) {
                System.out.println("Arquivo excluído com sucesso.");
            } else {
                System.out.println("Não foi possível excluir o arquivo.");
            }
        } else {
            System.out.println("O arquivo não existe no diretório especificado.");
        }
		
		
		// Obter a imagem da URL
		URL url = new URL(imageUrl);
		InputStream inputStream = url.openStream();
		OutputStream outputStream = new FileOutputStream(imagemEntrada);

		byte[] buffer = new byte[2048];
		int length;

		while ((length = inputStream.read(buffer)) != -1) {
			outputStream.write(buffer, 0, length);
		}

		inputStream.close();
		outputStream.close();
		
		if (criativo.getTextoCopyLinha1()!=null) {
		  
		  String mensagem = criativo.getTextoCopyLinha1() + "\\n" + criativo.getTextoCopyLinha2();
		
		  String imagem_pequena_redimensionada= criativo.getLogoGrupoWhatsapp();
		  
		  String command = "convert " +  imagemEntrada + " -resize 1200x628 -gravity west -background white -extent 1200x628 -gravity east -font " + criativo.getFonteLocal().getArquivo() + " -pointsize 42 -annotate +20-200 \"" + criativo.getTextoCopyLinha1() + "\" -annotate +20-140 \"" + criativo.getTextoCopyLinha2() + "\" -annotate +20-50 \"" + criativo.getTextoCopyLinha3() + "\" -gravity center -background \"" + criativo.getFundoColor()  +"\" " + imagem_pequena_redimensionada + " -gravity southeast -geometry +10+10 -composite " + imagemSaida;

		  
	      System.out.println(command);
		  ProcessBuilder processBuilder = new ProcessBuilder("/bin/bash", "-c", command);
          Process process = processBuilder.start();

          BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
          String line;
          while ((line = reader.readLine()) != null) {
              System.out.println(line);
          }

          int exitVal = process.waitFor();
          if (exitVal == 0) {
              System.out.println("Command executed successfully!");
          } else {
              // Something went wrong
              System.out.println("Error in executing command.");
          }

		}
		return imagemSaida;
	}
}

