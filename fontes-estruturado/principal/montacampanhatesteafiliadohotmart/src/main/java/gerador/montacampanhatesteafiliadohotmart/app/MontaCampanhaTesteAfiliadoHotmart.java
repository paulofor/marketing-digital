package gerador.montacampanhatesteafiliadohotmart.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import gerador.montacampanhatesteafiliadohotmart.passo.*;

import br.com.gersis.daobase.comum.DaoBaseComum;

public class MontaCampanhaTesteAfiliadoHotmart {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
			System.out.print("MontaCampanhaTesteAfiliadoHotmart");
			System.out.println("(03/07/2023 13:37:15)");
		try {
			carregaProp();
			MontaCampanhaTesteAfiliadoHotmartObj obj = new MontaCampanhaTesteAfiliadoHotmartObj();
			obj.executa();
			System.out.println("finalizou");
			System.exit(0);
		} catch (Exception e) {
			e.printStackTrace();
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
		DaoBaseComum.setProximo("MontaCampanhaTesteAfiliadoHotmartObj", new CampanhaAdsTeste_ObtemListaParaTeste());
		DaoBaseComum.setProximo("CampanhaAdsTeste_ObtemListaParaTeste", new CriaCampanhaAds());
		DaoBaseComum.setProximo("CriaCampanhaAds", new CampanhaAdsTeste_AtualizaCampanhaCriada());
	}
}
