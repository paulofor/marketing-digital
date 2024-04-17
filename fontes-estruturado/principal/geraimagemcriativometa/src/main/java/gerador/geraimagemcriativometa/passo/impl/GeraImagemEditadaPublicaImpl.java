package gerador.geraimagemcriativometa.passo.impl;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.URL;

import br.com.gersis.loopback.modelo.CriativoAnuncio;
import gerador.geraimagemcriativometa.passo.GeraImagemEditadaPublica;

public class GeraImagemEditadaPublicaImpl extends GeraImagemEditadaPublica {

	/*
	 * convert Dietas.png -gravity south -splice 0x160 ( -clone 0 -fill blue -colorize 100 \) \( -clone 0 -fill white -colorize 100 \
       -font Arial -pointsize 60 -gravity south -annotate +0+20 "Você precisa saber disso \n para perder peso" \) -delete 0 -compose over -composite \
    output.png
	 */
	
	
	private final String TEMP_FILE = "/home/usuario/aplicacoes/MarketingDigital/fontes-estruturado/principal/geraimagemcriativometa/imagens";
	private final String diretorioRemoto = "";
	private final String urlRemoto = "";
	private String PATH_IMAGENS = "/var/www/palfmarketing.online/www/criativos";
	private String PREFIXO_URL = "http://www.palfmarketing.online/criativos";

	@Override
	protected boolean executaCustom(CriativoAnuncio criativoCorrente) {
		String diretorioAtual = System.getProperty("user.dir");
	    System.out.println("O diretório atual é: " + diretorioAtual);
		try {
			String imagemLocal = this.geraImagemHil(criativoCorrente);
			String nomeArquivo =  "Id_" + criativoCorrente.getIdInteger() + "_" + System.currentTimeMillis() + ".jpg";
			this.enviaParaServidor(imagemLocal, PATH_IMAGENS + "/" +nomeArquivo);
			criativoCorrente.setUrlImagemEditada(PREFIXO_URL + "/" + nomeArquivo);
			this.saidaCriativoCorrente = criativoCorrente;
			System.out.println("imagem..." + nomeArquivo);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		
	}
	
	protected String geraImagemHil(CriativoAnuncio criativo) throws Exception {
		String imageUrl = criativo.getImagemPaginaVenda().getUrlFinal();
		String imagemEntrada = TEMP_FILE + "/" + criativo.getImagemPaginaVenda().getCodigoHexa() + ".png"; 
		String imagemSaida = TEMP_FILE + "/" + criativo.getImagemPaginaVenda().getCodigoHexa() + "-criativo.jpg";

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
		
	      //String command = "convert imagens/402155edf138cd42d456dbaa5c1637.png -gravity south -splice 0x160 \\( -size 1240x160 xc:blue \\) -composite -fill white -font Arial -pointsize 60 -annotate +0+20 \"Você precisa saber disso \\n para perder peso\" output.png";
	      //String command = "convert " + imagemEntrada + " -gravity south -splice 0x160 \\( -size 1240x160 xc:blue \\) -composite -fill white -font Arial -pointsize 60 -annotate +0+20 \"Você precisa saber disso \\n para perder peso\" " + imagemSaida ;
	      //String command = "convert " + imagemEntrada + " -gravity south -splice 0x160 \\( -size 1240x160 xc:blue \\) -composite -fill white -font Arial -pointsize 60 -annotate +0+20 \"" + mensagem + "\" " + imagemSaida ;
	      String command = "convert " + imagemEntrada + " -gravity south -splice 0x180 \\( -size 1240x180 xc:#000000 \\) -composite -fill white -font " + criativo.getFonteLocal().getArquivo() + " -pointsize 58 -annotate +0+20 \"" + mensagem + "\" " + imagemSaida ;

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
	

	protected String geraImagem(CriativoAnuncio criativo) throws Exception {
		String imageUrl = criativo.getImagemPaginaVenda().getUrlFinal();
		String imagemEntrada = TEMP_FILE + "/" + criativo.getImagemPaginaVenda().getCodigoHexa() + ".png"; 
		String imagemSaida = TEMP_FILE + "/" + criativo.getImagemPaginaVenda().getCodigoHexa() + "-criativo.jpg";

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
	        
	        String comando = "convert " + imagemEntrada + " -gravity south -splice 0x160 \\( -size 1240x160 xc:blue \\) -composite -fill white -font Arial -pointsize 60  -annotate +0+20 \"Você precisa saber disso \\n para perder peso\" output.png";

	        
	        String[] command = { "convert", 
	        		imagemEntrada,
	        		"-gravity", "south",
	                "-splice", "0x160",
	                "\\( -size 1240x160 xc:blue \\) ",
	                "-composite" ,
	                "-fill" , "white",
	                "-font" , "Arial",
	        		"-pointsize" , "60",
	        		"-annotate" , "+0+20" ,"Você precisa saber disso \n para perder peso",
	        		imagemSaida };

			
			ProcessBuilder processBuilder = new ProcessBuilder(command);
			Process process = processBuilder.start();
			BufferedReader reader = new BufferedReader(new InputStreamReader(process.getErrorStream()));
			String line;
			while ((line = reader.readLine()) != null) {
				System.err.println(line);
			}
			int exitCode = process.waitFor();
	        
			System.out.println();
	        System.out.println("Entrada: " + imagemEntrada);
	        System.out.println("Saida: " + imagemSaida);
	        System.out.println("********************************");
			/*
			String[] command = { "convert", imagemEntrada, "-pointsize", criativo.getFontSize(), "-font",
					criativo.getFonteLocal().getArquivo(), "-fill", criativo.getFontColor(), "-gravity",
					criativo.getGravity(), "-annotate", criativo.getAnnotate(),
					criativo.getTextoCopyLinha1() + "\n" + criativo.getTextoCopyLinha2(), imagemSaida };
			*/
			  // Comando convert
	       
	    
			
			if (exitCode == 0) {
				System.out.println("Imagem criada com sucesso!");
			} else {
				System.err.println("Erro ao converter a imagem para JPG.");
			}

		} else {
			String[] command = { "convert", imagemEntrada, imagemSaida };

			System.out.println(command);
			
			// Executar o comando convert para converter a imagem para JPG
			ProcessBuilder processBuilder = new ProcessBuilder(command);
			Process process = processBuilder.start();

			int exitCode = process.waitFor();
			
			if (exitCode == 0) {
				System.out.println("Imagem criada com sucesso!");
			} else {
				System.err.println("Erro ao converter a imagem para JPG.");
			}
		}

		
		return imagemSaida;
	}

}
