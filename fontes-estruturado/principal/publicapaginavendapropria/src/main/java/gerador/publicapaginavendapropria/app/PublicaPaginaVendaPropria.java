package gerador.publicapaginavendapropria.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;

import gerador.publicapaginavendapropria.passo.*;
import gerador.publicapaginavendapropria.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class PublicaPaginaVendaPropria {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("PublicaPaginaVendaPropria");
		System.out.println("(30/01/2024 15:39:07)");
		try {
			carregaProp();
			PublicaPaginaVendaPropriaObj obj = new PublicaPaginaVendaPropriaObj();
			obj.executa();
			System.out.println("finalizou");
			System.exit(0);
		} catch (Exception e) {
			gravarErro(e);
		}
	}


	private static void gravarErro(Exception e) {
		try {
			FileWriter fileWriter = new FileWriter("PublicaPaginaVendaPropria.err", true);
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
		DaoBaseComum.setProximo("PublicaPaginaVendaPropriaObj", new PaginaVendaPropria_ObtemListaPublicacaoImpl());
		DaoBaseComum.setProximo("PaginaVendaPropria_ObtemListaPublicacao", new VersaoPaginaVenda_ObtemPorIdImpl());
		DaoBaseComum.setProximo("VersaoPaginaVenda_ObtemPorId", new GeraArquivoVersaoImpl());
	}
}
