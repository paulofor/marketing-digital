package gerador.criapaginavendavsl.passo.impl;


import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
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
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.SftpException;

import br.com.gersis.loopback.modelo.PaginaVendaVsl;
import br.com.gersis.loopback.modelo.PosicaoElementoPaginaVenda;
import br.com.gersis.loopback.modelo.VersaoPaginaVenda;
import gerador.criapaginavendavsl.passo.GeraPaginaVsl;



public class GeraPaginaVslImpl extends GeraPaginaVsl { 

	SecureRandom random = new SecureRandom();
	private String DIRETORIO_TEMP = "pagina-venda-vsl-temp";
	
	private String PATH_REMOTO = "/var/www/marketingpalf.shop/www";
	private String SSH_HOST = "191.252.92.222";
	private String SSH_USER = "root";
	private int SSH_PORT = 22;
	private String TEMP_FILE = "imagens";
	private String PREFIXO_URL = "https://www.marketingpalf.shop";
	private String passSSH = "";
	private String localFilePath = "";
	
	@Override
	protected boolean executaCustom(PaginaVendaVsl paginaCorrente) {
		
		try {
			
			Properties prop = new Properties();
			String path = "/etc/openai/config.properties"; 

			FileInputStream input = new FileInputStream(path);
			prop.load(input);
			passSSH = prop.getProperty("pass_ssh");
			
			String html = paginaCorrente.getModeloPaginaVendaVsl().getCodigoFonte();
			// Troca Headline
			html = html.replace("---headline---", paginaCorrente.getHeadline());
			html = html.replace("---codigoYouTube---", paginaCorrente.getVideoVsl().getCodigoYouTube());
			html = html.replace("---dominio---", PREFIXO_URL);
			html = html.replace("---produto---",paginaCorrente.getProdutoProprio().getNome());
			html = html.replace("---cpa---", paginaCorrente.getProdutoProprio().getUrlKiwify());
			html = html.replace("---icone---", paginaCorrente.getProdutoProprio().getUrlIconePaginaVenda());
			paginaCorrente.setHtml(html);
			if (paginaCorrente.getCodigoHexa() == null) {
				paginaCorrente.setCodigoHexa(this.generateRandomHex());
			}
			//paginaCorrente.setProntoCriacao(2);
			localFilePath = this.gravaTemp(html);
			this.enviaArquivo(paginaCorrente);
			paginaCorrente.setUrl(PREFIXO_URL + "/" + paginaCorrente.getCodigoHexa()); 
			this.saidaPaginaCorrente = paginaCorrente;
			return true;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		} 
	}
	
	private void enviaArquivo(PaginaVendaVsl paginaCorrente) throws JSchException, SftpException, FileNotFoundException {
		JSch jsch = new JSch();
        Session session = jsch.getSession(SSH_USER, SSH_HOST, SSH_PORT);
        session.setPassword(passSSH);
        session.setConfig("StrictHostKeyChecking", "no");
        session.connect();

        ChannelSftp sftpChannel = (ChannelSftp) session.openChannel("sftp");
        sftpChannel.connect();

        String remoteDirectory = PATH_REMOTO + "/" + paginaCorrente.getCodigoHexa();
        // Verifica se o diretório remoto existe, caso contrário, cria-o
        try {
            sftpChannel.cd(remoteDirectory);
        } catch (SftpException e) {
            sftpChannel.mkdir(remoteDirectory);
            sftpChannel.cd(remoteDirectory);
        }

        // Envia o arquivo para o servidor remoto
        File localFile = new File(localFilePath);
        InputStream inputStream = new FileInputStream(localFile);
        sftpChannel.put(inputStream, localFile.getName());

        sftpChannel.disconnect();
        session.disconnect();
		
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
	
	private String gravaTemp(String conteudoPagina) throws IOException {
		File diretorioTemp = new File(DIRETORIO_TEMP);
        if (!diretorioTemp.exists()) {
            diretorioTemp.mkdirs();
        }

        // Cria o arquivo no diretório com o conteúdo da variável conteudoPagina
        File arquivoTemp = new File(diretorioTemp, "index.html");
        FileWriter writer = new FileWriter(arquivoTemp);
        writer.write(conteudoPagina);
        writer.close();
        return arquivoTemp.getAbsolutePath();
	}
	
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

