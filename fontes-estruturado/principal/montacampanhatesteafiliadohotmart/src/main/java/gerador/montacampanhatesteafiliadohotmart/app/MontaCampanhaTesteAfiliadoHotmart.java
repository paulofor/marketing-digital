package gerador.montacampanhatesteafiliadohotmart.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;

import gerador.montacampanhatesteafiliadohotmart.passo.*;
import gerador.montacampanhatesteafiliadohotmart.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class MontaCampanhaTesteAfiliadoHotmart {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("MontaCampanhaTesteAfiliadoHotmart");
		System.out.println("(04/03/2024 11:53:15)");
		try {
			carregaProp();
			MontaCampanhaTesteAfiliadoHotmartObj obj = new MontaCampanhaTesteAfiliadoHotmartObj();
			obj.executa();
			System.out.println("finalizou");
			System.exit(0);
		} catch (Exception e) {
			gravarErro(e);
		}
	}


	private static void gravarErro(Exception e) {
		try {
			FileWriter fileWriter = new FileWriter("MontaCampanhaTesteAfiliadoHotmart.err", true);
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
		DaoBaseComum.setProximo("MontaCampanhaTesteAfiliadoHotmartObj", new CampanhaAdsTeste_ObtemListaParaTesteImpl());
		DaoBaseComum.setProximo("CampanhaAdsTeste_ObtemListaParaTeste", new CriaCampanhaAdsImpl());
		DaoBaseComum.setProximo("CriaCampanhaAds", new CampanhaAdsTeste_AtualizaCampanhaCriadaImpl());
	}
}
