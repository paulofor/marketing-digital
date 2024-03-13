package gerador.publicapaginavenda.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;

import gerador.publicapaginavenda.passo.*;
import gerador.publicapaginavenda.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class PublicaPaginaVenda {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("PublicaPaginaVenda");
		System.out.println("(12/03/2024 16:32:16)");
		try {
			carregaProp();
			PublicaPaginaVendaObj obj = new PublicaPaginaVendaObj();
			obj.executa();
			System.out.println("finalizou");
			System.exit(0);
		} catch (Exception e) {
			gravarErro(e);
		}
	}


	private static void gravarErro(Exception e) {
		try {
			FileWriter fileWriter = new FileWriter("PublicaPaginaVenda.err", true);
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
	}
}
