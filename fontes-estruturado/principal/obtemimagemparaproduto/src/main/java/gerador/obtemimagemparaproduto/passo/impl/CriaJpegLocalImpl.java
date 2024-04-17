package gerador.obtemimagemparaproduto.passo.impl;


import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.util.Properties;


import br.com.gersis.loopback.modelo.ImagemConteudo;
import gerador.obtemimagemparaproduto.passo.CriaJpegLocal;



public class CriaJpegLocalImpl extends CriaJpegLocal {
	
	
	final public String TEMP_FILE = "/home/usuario/Imagens/ImagemProduto";

	@Override
	protected boolean executaCustom(ImagemConteudo imagemCorrente) {
		
        try {
        	String imageUrl = imagemCorrente.getUrlFinal();
    		if (imagemCorrente.getConteudoProdutoKiwify()==null) {
    			throw new Exception("Imagem " + imagemCorrente.getUrlFinal() + " não está associada com ConteudoProduto");
    		}
            String outputFileName = TEMP_FILE + "/" + imagemCorrente.getConteudoProdutoKiwify().getNome() + ".jpg"; // Nome do arquivo de saída em JPG

            // Obter a imagem da URL
            URL url = new URL(imageUrl);
            InputStream inputStream = url.openStream();
            OutputStream outputStream = new FileOutputStream(outputFileName);

            byte[] buffer = new byte[2048];
            int length;

            while ((length = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, length);
            }

            inputStream.close();
            outputStream.close();

            // Executar o comando convert para converter a imagem para JPG
            ProcessBuilder processBuilder = new ProcessBuilder("convert", outputFileName, "-quality", "80", outputFileName);
            Process process = processBuilder.start();

            int exitCode = process.waitFor();

            if (exitCode == 0) {
                System.out.println("Imagem convertida para JPG com sucesso em " + TEMP_FILE);
            } else {
                System.err.println("Erro ao converter a imagem para JPG.");
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
	} 

	

}

