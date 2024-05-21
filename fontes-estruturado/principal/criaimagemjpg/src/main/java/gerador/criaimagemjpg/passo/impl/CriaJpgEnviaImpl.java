package gerador.criaimagemjpg.passo.impl;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Properties;

import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;

import br.com.gersis.loopback.modelo.ImagemPaginaVenda;
import gerador.criaimagemjpg.passo.*;

public class CriaJpgEnviaImpl extends CriaJpgEnvia {

	private String PATH_IMAGENS = "/var/www/marketingpalf.shop/www/imagens";
	private String SSH_HOST = "191.252.92.222";
	private String SSH_USER = "root";
	private int SSH_PORT = 22;
	private String TEMP_FILE = "imagens";
	private String PREFIXO_URL = "https://www.marketingpalf.shop/imagens";
	
	private String imagemMenor;
	
	@Override
	protected boolean executaCustom(ImagemPaginaVenda imagemCorrente) {
		try {
			String imagem = this.obtemImagem(imagemCorrente);
			// Imagem-80
			String destino = PATH_IMAGENS + "/" + imagemCorrente.getCodigoHexa() + "-80.jpg";
			this.sendViaSSH(imagem, destino);
			imagemCorrente.setUrlJpeg(PREFIXO_URL + "/" +  imagemCorrente.getCodigoHexa() + "-80.jpg");
			// Imagem-20
			destino = PATH_IMAGENS + "/" + imagemCorrente.getCodigoHexa() + "-20.jpg";
			this.sendViaSSH(this.imagemMenor, destino);
			imagemCorrente.setUrlJpeg20(PREFIXO_URL + "/" +  imagemCorrente.getCodigoHexa() + "-20.jpg");
			this.saidaImagemCorrente = imagemCorrente;
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			System.exit(-1);
			return false;
		}
	}

	private void sendViaSSH(String imagem, String destino) throws Exception {
		// TODO Auto-generated method stub
		
		
		
		Properties prop = new Properties();
		String path = "/etc/openai/config.properties"; 
		FileInputStream input = new FileInputStream(path);
		prop.load(input);
		String passSSH = prop.getProperty("pass_ssh");
		
		// Crie uma nova sessão JSch.
		JSch jsch = new JSch();

		// Configure a sessão para usar o nome de usuário e a senha fornecidos.
		Session session = jsch.getSession(SSH_USER, SSH_HOST, SSH_PORT);
		session.setPassword(passSSH);

		// Defina as propriedades da sessão.
		java.util.Properties config = new java.util.Properties();
		config.put("StrictHostKeyChecking", "no");
		session.setConfig(config);

		// Conecte-se à sessão.
		session.connect();

		// Abra um canal SSH.
		ChannelSftp channelSftp = (ChannelSftp) session.openChannel("sftp");
		channelSftp.connect();

		// Enviar o arquivo.
		channelSftp.put(imagem, destino);

		// Feche o canal e a sessão.
		channelSftp.exit();
		session.disconnect();
		
	}

	private String obtemImagem(ImagemPaginaVenda imagemCorrente) throws Exception {
		String imageUrl = imagemCorrente.getUrlFinal();
		String outputFileName = "imagens/" + imagemCorrente.getProdutoProprio().getNome() + ".jpg"; 
		
		String imagem80 = "imagens/" + imagemCorrente.getProdutoProprio().getNome() + "-80.jpg"; 
		String imagem20 = "imagens/" + imagemCorrente.getProdutoProprio().getNome() + "-20.jpg";
		
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
		ProcessBuilder processBuilder = new ProcessBuilder("convert", outputFileName, "-resize", "20%", imagem20);
		Process process = processBuilder.start();

		int exitCode = process.waitFor();

		if (exitCode == 0) {
			System.out.println("Imagem convertida para JPG-20 com sucesso!");
		} else {
			System.err.println("Erro ao converter a imagem para JPG-20.");
		}
		this.imagemMenor = imagem20;

		// Executar o comando convert para converter a imagem para JPG
		processBuilder = new ProcessBuilder("convert", outputFileName, "-resize", "80%", imagem80);
		process = processBuilder.start();

		exitCode = process.waitFor();

		if (exitCode == 0) {
			System.out.println("Imagem convertida para JPG-80 com sucesso!");
		} else {
			System.err.println("Erro ao converter a imagem para JPG.");
		}
		return imagem80;
	}
	
	

}
