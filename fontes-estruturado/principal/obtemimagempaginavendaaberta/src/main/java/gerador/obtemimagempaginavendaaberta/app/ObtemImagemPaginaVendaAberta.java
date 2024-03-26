package gerador.obtemimagempaginavendaaberta.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;

import gerador.obtemimagempaginavendaaberta.passo.*;
import gerador.obtemimagempaginavendaaberta.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class ObtemImagemPaginaVendaAberta {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("ObtemImagemPaginaVendaAberta");
		System.out.println("(26/03/2024 19:04:47)");
		try {
			carregaProp();
			ObtemImagemPaginaVendaAbertaObj obj = new ObtemImagemPaginaVendaAbertaObj();
			obj.executa();
			System.out.println("finalizou");
			System.exit(0);
		} catch (Exception e) {
			gravarErro(e);
		}
	}


	private static void gravarErro(Exception e) {
		try {
			FileWriter fileWriter = new FileWriter("ObtemImagemPaginaVendaAberta.err", true);
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
		UrlLoopback = "http://localhost:23101/api";
		DaoBaseComum.setUrl(UrlLoopback);
	}

	private static void preparaComum() {
		DaoBaseComum.setUrl(UrlLoopback);
		DaoBaseComum.setProximo("ObtemImagemPaginaVendaAbertaObj", new PaginaVendaAberta_ListaParaImagemCompletaImpl());
		DaoBaseComum.setProximo("PaginaVendaAberta_ListaParaImagemCompleta", new ObtemComSeleniumImpl());
		DaoBaseComum.setProximo("ObtemComSelenium", new PaginaVendaAberta_AtualizaPorGeracaoImpl());
	}
}
