package gerador.criacampanhaadsrededisplay.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;

import gerador.criacampanhaadsrededisplay.passo.*;
import gerador.criacampanhaadsrededisplay.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class CriaCampanhaAdsRedeDisplay {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("CriaCampanhaAdsRedeDisplay");
		System.out.println("(25/12/2023 02:07:30)");
		try {
			carregaProp();
			CriaCampanhaAdsRedeDisplayObj obj = new CriaCampanhaAdsRedeDisplayObj();
			obj.executa();
			System.out.println("finalizou");
			System.exit(0);
		} catch (Exception e) {
			gravarErro(e);
		}
	}


	private static void gravarErro(Exception e) {
		try {
			FileWriter fileWriter = new FileWriter("CriaCampanhaAdsRedeDisplay.err", true);
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
		DaoBaseComum.setProximo("CriaCampanhaAdsRedeDisplayObj", new CampanhaAdsRedeDisplay_ObtemListaParaCriacaoImpl());
		DaoBaseComum.setProximo("CampanhaAdsRedeDisplay_ObtemListaParaCriacao", new CriaCampanhaAdsRedeDisplayImpl());
		DaoBaseComum.setProximo("CriaCampanhaAdsRedeDisplay", new CampanhaAdsRedeDisplay_AtualizaCampanhaCriadaImpl());
	}
}
