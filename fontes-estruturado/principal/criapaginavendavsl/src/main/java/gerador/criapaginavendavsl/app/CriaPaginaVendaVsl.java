package gerador.criapaginavendavsl.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;

import gerador.criapaginavendavsl.passo.*;
import gerador.criapaginavendavsl.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class CriaPaginaVendaVsl {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("CriaPaginaVendaVsl");
		System.out.println("(04/03/2024 11:53:37)");
		try {
			carregaProp();
			CriaPaginaVendaVslObj obj = new CriaPaginaVendaVslObj();
			obj.executa();
			System.out.println("finalizou");
			System.exit(0);
		} catch (Exception e) {
			gravarErro(e);
		}
	}


	private static void gravarErro(Exception e) {
		try {
			FileWriter fileWriter = new FileWriter("CriaPaginaVendaVsl.err", true);
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
		DaoBaseComum.setProximo("CriaPaginaVendaVslObj", new PaginaVendaVsl_ListaParaCriacaoImpl());
		DaoBaseComum.setProximo("PaginaVendaVsl_ListaParaCriacao", new GeraPaginaVslImpl());
		DaoBaseComum.setProximo("GeraPaginaVsl", new PaginaVendaVsl_AtualizaCriadaImpl());
	}
}
