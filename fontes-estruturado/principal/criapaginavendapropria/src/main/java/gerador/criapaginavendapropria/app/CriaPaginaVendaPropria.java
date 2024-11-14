package gerador.criapaginavendapropria.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import gerador.criapaginavendapropria.passo.*;
import gerador.criapaginavendapropria.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class CriaPaginaVendaPropria {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("CriaPaginaVendaPropria");
		System.out.println("(13/11/2024 12:10:38)");
		try {
			carregaProp();
			CriaPaginaVendaPropriaObj obj = new CriaPaginaVendaPropriaObj();
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
			FileWriter fileWriter = new FileWriter("CriaPaginaVendaPropria.err", true);
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
		DaoBaseComum.setProximo("CriaPaginaVendaPropriaObj", new VersaoPaginaVenda_ObtemListaCriacaoPaginaPropriaImpl());
		DaoBaseComum.setProximo("VersaoPaginaVenda_ObtemListaCriacaoPaginaPropria", new ProcessaPaginaVendaPropriaImpl());
		DaoBaseComum.setProximo("ProcessaPaginaVendaPropria", new PaginaVendaPropria_InserePaginaVendaImpl());
	}
}
