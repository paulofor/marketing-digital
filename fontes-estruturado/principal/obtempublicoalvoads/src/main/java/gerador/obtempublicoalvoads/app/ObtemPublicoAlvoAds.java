package gerador.obtempublicoalvoads.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;

import gerador.obtempublicoalvoads.passo.*;
import gerador.obtempublicoalvoads.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class ObtemPublicoAlvoAds {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("ObtemPublicoAlvoAds");
		System.out.println("(09/01/2024 10:03:31)");
		try {
			carregaProp();
			ObtemPublicoAlvoAdsObj obj = new ObtemPublicoAlvoAdsObj();
			obj.executa();
			System.out.println("finalizou");
			System.exit(0);
		} catch (Exception e) {
			gravarErro(e);
		}
	}


	private static void gravarErro(Exception e) {
		try {
			FileWriter fileWriter = new FileWriter("ObtemPublicoAlvoAds.err", true);
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
		DaoBaseComum.setProximo("ObtemPublicoAlvoAdsObj", new ContaGoogle_ListaCompletaImpl());
		DaoBaseComum.setProximo("ContaGoogle_ListaCompleta", new ObtemDadosPublicoAlvoAdsImpl());
		DaoBaseComum.setProximo("ObtemDadosPublicoAlvoAds", new PublicoAlvoAdsDiario_AtualizaListaPorContaImpl());
		DaoBaseComum.setProximo("PublicoAlvoAdsDiario_AtualizaListaPorConta", new ObtemDadosSegmentoPersonalizadoImpl());
		DaoBaseComum.setProximo("ObtemDadosSegmentoPersonalizado", new SegmentoMercadoAdsPersonalizado_AtualizaListaPorContaImpl());
	}
}
