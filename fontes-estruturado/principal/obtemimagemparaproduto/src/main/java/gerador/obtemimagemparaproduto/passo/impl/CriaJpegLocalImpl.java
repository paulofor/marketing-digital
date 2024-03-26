package gerador.obtemimagemparaproduto.passo.impl;


import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.util.Properties;

import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;

import br.com.gersis.loopback.modelo.ImagemConteudo;
import gerador.obtemimagemparaproduto.passo.CriaJpegLocal;



public class CriaJpegLocalImpl extends CriaJpegLocal {
	
	


	@Override
	protected boolean executaCustom(ImagemConteudo imagemCorrente) {
		String imageUrl = imagemCorrente.getUrlFinal();
        String outputFileName = TEMP_FILE + "/" + imagemCorrente.getConteudoProdutoKiwify().getNome() + ".jpg"; // Nome do arquivo de saída em JPG

        try {
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
                System.out.println("Imagem convertida para JPG com sucesso!");
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

