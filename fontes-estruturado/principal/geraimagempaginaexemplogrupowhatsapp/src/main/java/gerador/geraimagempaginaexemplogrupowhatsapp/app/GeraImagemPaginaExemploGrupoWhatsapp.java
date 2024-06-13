package gerador.geraimagempaginaexemplogrupowhatsapp.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import gerador.geraimagempaginaexemplogrupowhatsapp.passo.*;
import gerador.geraimagempaginaexemplogrupowhatsapp.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class GeraImagemPaginaExemploGrupoWhatsapp {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("GeraImagemPaginaExemploGrupoWhatsapp");
		System.out.println("(13/06/2024 07:40:39)");
		try {
			carregaProp();
			GeraImagemPaginaExemploGrupoWhatsappObj obj = new GeraImagemPaginaExemploGrupoWhatsappObj();
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
			FileWriter fileWriter = new FileWriter("GeraImagemPaginaExemploGrupoWhatsapp.err", true);
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
		DaoBaseComum.setProximo("GeraImagemPaginaExemploGrupoWhatsappObj", new PaginaWhatsappExemplo_ListaParaColetarImagemImpl());
		DaoBaseComum.setProximo("PaginaWhatsappExemplo_ListaParaColetarImagem", new GeraImagemComSeleniumImpl());
		DaoBaseComum.setProximo("GeraImagemComSelenium", new PaginaWhatsappExemplo_AtualizaImagemImpl());
	}
}
