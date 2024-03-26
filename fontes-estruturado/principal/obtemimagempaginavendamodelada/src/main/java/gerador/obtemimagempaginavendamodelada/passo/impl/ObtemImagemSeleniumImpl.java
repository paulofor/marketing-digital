package gerador.obtemimagempaginavendamodelada.passo.impl;


import java.io.FileInputStream;
import java.util.Properties;

import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.SftpException;

import br.com.gersis.loopback.modelo.PaginaVendaModelada;
import gerador.obtemimagempaginavendamodelada.passo.ObtemImagemSelenium;
import teste.ObtemFiguraPagina;



public class ObtemImagemSeleniumImpl extends ObtemImagemSelenium {

	private String PATH_IMAGENS = "/var/www/palfmarketing.online/www/imagem-pagina";
	private String SSH_HOST = "191.252.92.222";
	private String SSH_USER = "root";
	private int SSH_PORT = 22;
	private String TEMP_FILE = "imagens";
	private String PREFIXO_URL = "http://www.palfmarketing.online/imagem-pagina";
	
	
	@Override
	protected boolean executaCustom(PaginaVendaModelada paginaCorrente) {
		// TODO Auto-generated method stub
		try {
			ObtemFiguraPagina selenium = new ObtemFiguraPagina();
			selenium.setUrl(paginaCorrente.getUrl());
			selenium.setArquivoImagem("/home/usuario/aplicacoes/MarketingDigital/imagem/" + paginaCorrente.getIdInteger() + ".png");
			selenium.executaLeitura();
			this.saidaPaginaCorrente = paginaCorrente;
			this.saidaPaginaCorrente.setImagemCompleta(selenium.getArquivoImagem());
			String fonte = this.saidaPaginaCorrente.getImagemCompleta();
			String destino = PATH_IMAGENS + "/completa" + paginaCorrente.getIdInteger() + ".png"; 
			enviaParaServidor(fonte, destino);
			String urlImagem = PREFIXO_URL + "/completa" + paginaCorrente.getIdInteger() + ".png";
			this.saidaPaginaCorrente.setUrlImagemCompleta(urlImagem);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	private void enviaParaServidor(String fonte, String destino) throws Exception {
		
		Properties prop = new Properties();
		String path = "/etc/openai/config.properties";
		FileInputStream input = new FileInputStream(path);
		prop.load(input);
		String passSSH = prop.getProperty("pass_ssh");
		
		JSch jsch = new JSch();

		Session session = jsch.getSession(SSH_USER, SSH_HOST, SSH_PORT);
		session.setPassword(passSSH);
			
		java.util.Properties config = new java.util.Properties();
		config.put("StrictHostKeyChecking", "no");
		session.setConfig(config);
		session.connect();
		ChannelSftp channelSftp = (ChannelSftp) session.openChannel("sftp");
		channelSftp.connect();

		channelSftp.put(fonte, destino);
		channelSftp.exit();
		session.disconnect();
	} 


}

