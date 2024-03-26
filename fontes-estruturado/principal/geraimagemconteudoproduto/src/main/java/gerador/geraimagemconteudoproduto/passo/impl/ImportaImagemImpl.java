package gerador.geraimagemconteudoproduto.passo.impl;


import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.SecureRandom;
import java.util.Properties;

import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;

import br.com.gersis.loopback.modelo.ConteudoProdutoKiwify;
import br.com.gersis.loopback.modelo.ImagemConteudo;
import br.com.gersis.loopback.modelo.PromptImagemConteudo;
import gerador.geraimagemconteudoproduto.passo.*;



public class ImportaImagemImpl extends ImportaImagem {

	
	private String PATH_IMAGENS = "/var/www/palfmarketing.online/www/imagens";
	private String SSH_HOST = "191.252.92.222";
	private String SSH_USER = "root";
	private int SSH_PORT = 22;
	private String TEMP_FILE = "imagens";
	private String PREFIXO_URL = "https://www.palfmarketing.online/imagens";

	SecureRandom random = new SecureRandom();
	
	@Override
	protected boolean executaCustom(ConteudoProdutoKiwify conteudoCorrente, ImagemConteudo imagemNova) {
		Properties prop = new Properties();
		String path = "/etc/openai/config.properties"; 
		PromptImagemConteudo promptObj = conteudoCorrente.getEntregavelProduto().getPromptImagemConteudos().get(0);

		try {
			
			FileInputStream input = new FileInputStream(path);
			prop.load(input);
			String passSSH = prop.getProperty("pass_ssh");
			
			String imagemUrl = imagemNova.getUrlOriginal();
			String codigoImagem = this.generateRandomHex() ;
			String nomeArquivo = codigoImagem + ".png";
			String nomeCompactado = conteudoCorrente.getNome() + "-" + promptObj.getIdInteger() + ".jpg";
			imagemNova.setArquivoLocal(nomeArquivo);
			String destino = PATH_IMAGENS + "/" + imagemNova.getArquivoLocal();
			String arquivoLocal = TEMP_FILE + "/" + nomeArquivo;
			imagemNova.setArquivoLocal(arquivoLocal);
			String localDiminuido = TEMP_FILE + "/" + nomeCompactado;
			imagemNova.setImagemJpg(localDiminuido);
			String urlFinal = PREFIXO_URL + "/" + nomeArquivo;
			imagemNova.setUrlFinal(urlFinal);
			this.downloadImageAndSendViaSSH(imagemUrl, arquivoLocal, SSH_HOST, SSH_PORT, SSH_USER, passSSH, destino);
			this.converteImagem(imagemNova.getArquivoLocal(), imagemNova.getImagemJpg());
			
			this.saidaImagemNova = imagemNova;
			
		} catch (Exception e) {
			e.printStackTrace();
			System.exit(-1);
		}
		return true;
		
	}
	
	private void converteImagem(String origem, String destino) throws IOException, InterruptedException {

        // Comando do ImageMagick para redimensionar a imagem em 10%
        String[] command = {"convert", origem, "-resize", "100%", destino};

        // Cria um processo para executar o comando
        ProcessBuilder processBuilder = new ProcessBuilder(command);

        // Redireciona a saída padrão e de erro para a saída do programa Java
        processBuilder.redirectOutput(ProcessBuilder.Redirect.INHERIT);
        processBuilder.redirectError(ProcessBuilder.Redirect.INHERIT);

        // Executa o comando
        Process process = processBuilder.start();

        // Espera o término do processo
        process.waitFor();

        System.out.println("Imagem redimensionada com sucesso.");

      
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

