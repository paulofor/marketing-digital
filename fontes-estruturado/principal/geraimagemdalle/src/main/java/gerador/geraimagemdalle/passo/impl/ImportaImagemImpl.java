package gerador.geraimagemdalle.passo.impl;

import java.io.FileInputStream;
import java.io.InputStream;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.SecureRandom;
import java.util.List;
import java.util.Properties;

import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;

import br.com.gersis.loopback.modelo.ImagemPaginaVenda;
import gerador.geraimagemdalle.passo.ImportaImagem;

public class ImportaImagemImpl extends ImportaImagem {

	private String PATH_IMAGENS = "/var/www/palfmarketing.online/www/imagens";
	private String SSH_HOST = "191.252.92.222";
	private String SSH_USER = "root";
	private int SSH_PORT = 22;
	private String TEMP_FILE = "imagens";
	private String PREFIXO_URL = "http://www.palfmarketing.online/imagens";

	SecureRandom random = new SecureRandom();

	@Override
	protected boolean executaCustom(List<ImagemPaginaVenda> listaImagem) {
		
		Properties prop = new Properties();
		String path = "/etc/openai/config.properties"; 

		try {
			
			FileInputStream input = new FileInputStream(path);
			prop.load(input);
			String passSSH = prop.getProperty("pass_ssh");
			
			for (ImagemPaginaVenda imagem : listaImagem) {
				String imagemUrl = imagem.getUrlOriginal();
				imagem.setCodigoHexa(this.generateRandomHex());
				String nomeArquivo = imagem.getCodigoHexa() + ".png";
				imagem.setArquivoLocal(nomeArquivo);
				String destino = PATH_IMAGENS + "/" + imagem.getArquivoLocal();
				String arquivoLocal = TEMP_FILE + "/" + nomeArquivo;
				String urlFinal = PREFIXO_URL + "/" + nomeArquivo;
				imagem.setUrlFinal(urlFinal);
				this.downloadImageAndSendViaSSH(imagemUrl, arquivoLocal, SSH_HOST, SSH_PORT, SSH_USER, passSSH, destino);
			}
			this.saidaListaImagem = listaImagem;
		} catch (Exception e) {
			e.printStackTrace();
			System.exit(-1);
		}
		
		
		return true;
	}
	
	public void enviaArquivo() {
		
	}
	

	public void downloadImageAndSendViaSSH(String imageUrl, String destinationPath, String sshHost, int sshPort,
			String sshUser, String sshPassword, String arquivoFinal) throws Exception {
		// Crie uma URL object for the image
		URL url = new URL(imageUrl);

		// Leia o conteúdo da URL para um InputStream
		InputStream in = url.openStream();

		// Crie um Path para o local do arquivo de destino.
		Path outputPath = Paths.get(destinationPath);

		// Copie a imagem para o arquivo de destino.
		Files.copy(in, outputPath, StandardCopyOption.REPLACE_EXISTING);

		// Agora, enviaremos o arquivo para um servidor SSH usando a biblioteca JSch.

		// Crie uma nova sessão JSch.
		JSch jsch = new JSch();

		// Configure a sessão para usar o nome de usuário e a senha fornecidos.
		Session session = jsch.getSession(sshUser, sshHost, sshPort);
		session.setPassword(sshPassword);

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
		channelSftp.put(destinationPath, arquivoFinal);

		// Feche o canal e a sessão.
		channelSftp.exit();
		session.disconnect();
	}

	private String generateRandomHex() {
		// Crie um array de bytes e gera números aleatórios
		byte[] bytes = new byte[15]; // 15 bytes * 2 (um byte representa dois caracteres hexadecimais) = 30
										// caracteres hexadecimais
		random.nextBytes(bytes);

		// converte bytes para hexadecimal
		StringBuilder sb = new StringBuilder();
		for (byte b : bytes) {
			sb.append(String.format("%02x", b));
		}

		return sb.toString();
	}

}
