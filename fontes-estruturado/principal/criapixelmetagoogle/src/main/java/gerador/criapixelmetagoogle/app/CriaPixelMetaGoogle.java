package gerador.criapixelmetagoogle.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;

import gerador.criapixelmetagoogle.passo.*;
import gerador.criapixelmetagoogle.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class CriaPixelMetaGoogle {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("CriaPixelMetaGoogle");
		System.out.println("(01/11/2023 07:34:44)");
		try {
			carregaProp();
			CriaPixelMetaGoogleObj obj = new CriaPixelMetaGoogleObj();
			obj.executa();
			System.out.println("finalizou");
			System.exit(0);
		} catch (Exception e) {
			gravarErro(e);
		}
	}


	private static void gravarErro(Exception e) {
		try {
			FileWriter fileWriter = new FileWriter("CriaPixelMetaGoogle.err", true);
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
		DaoBaseComum.setProximo("CriaPixelMetaGoogleObj", new ProdutoAfiliadoHotmart_ListaCriarPixelGoogleImpl());
		DaoBaseComum.setProximo("ProdutoAfiliadoHotmart_ListaCriarPixelGoogle", new GeraPixelGoogleAdsImpl());
		DaoBaseComum.setProximo("GeraPixelGoogleAds", new PixelGoogle_RegistraCriacaoImpl());
	}
}
