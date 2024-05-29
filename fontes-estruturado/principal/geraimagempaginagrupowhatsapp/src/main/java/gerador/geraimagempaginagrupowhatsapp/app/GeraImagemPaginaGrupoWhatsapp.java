package gerador.geraimagempaginagrupowhatsapp.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import gerador.geraimagempaginagrupowhatsapp.passo.*;
import gerador.geraimagempaginagrupowhatsapp.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class GeraImagemPaginaGrupoWhatsapp {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("GeraImagemPaginaGrupoWhatsapp");
		System.out.println("(29/05/2024 02:11:06)");
		try {
			carregaProp();
			GeraImagemPaginaGrupoWhatsappObj obj = new GeraImagemPaginaGrupoWhatsappObj();
			obj.executa();
			LocalDateTime dataHoraAtual = LocalDateTime.now();
			DateTimeFormatter formatador = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
			String dataHoraFormatada = dataHoraAtual.format(formatador);
			System.out.println("finalizou " + dataHoraFormatada);
			System.exit(0);
		} catch (Exception e) {
			gravarErro(e);
		}
	}


	private static void gravarErro(Exception e) {
		try {
			FileWriter fileWriter = new FileWriter("GeraImagemPaginaGrupoWhatsapp.err", true);
			PrintWriter printWriter = new PrintWriter(fileWriter);
			e.printStackTrace(printWriter);
			printWriter.close();
		} catch (IOException ex) {
			ex.printStackTrace();
		}
	}

	private static void carregaProp() throws IOException {
		//System.out.println("Dir:" + System.getProperty("user.dir"));
		//InputStream input = new FileInputStream("CriaPythonTreinoRede.config");
		//Properties prop = new Properties();
		//prop.load(input);
		//UrlLoopback = prop.getProperty("loopback.url");
		UrlLoopback = "http://vps-40d69db1.vps.ovh.ca:23101/api";
		DaoBaseComum.setUrl(UrlLoopback);
	}

	private static void preparaComum() {
		DaoBaseComum.setUrl(UrlLoopback);
		DaoBaseComum.setProximo("GeraImagemPaginaGrupoWhatsappObj", new PaginaWhatsappGrupo_ListaParaObterImagemImpl());
		DaoBaseComum.setProximo("PaginaWhatsappGrupo_ListaParaObterImagem", new GeraImagemComSeleniumImpl());
		DaoBaseComum.setProximo("GeraImagemComSelenium", new PaginaWhatsappGrupo_AtualizaImagemImpl());
	}
}
