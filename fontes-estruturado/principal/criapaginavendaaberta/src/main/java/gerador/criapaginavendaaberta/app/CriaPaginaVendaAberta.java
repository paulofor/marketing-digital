package gerador.criapaginavendaaberta.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import gerador.criapaginavendaaberta.passo.*;
import gerador.criapaginavendaaberta.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class CriaPaginaVendaAberta {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("CriaPaginaVendaAberta");
		System.out.println("(01/06/2024 00:08:51)");
		try {
			carregaProp();
			CriaPaginaVendaAbertaObj obj = new CriaPaginaVendaAbertaObj();
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
			FileWriter fileWriter = new FileWriter("CriaPaginaVendaAberta.err", true);
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
		DaoBaseComum.setProximo("CriaPaginaVendaAbertaObj", new PaginaVendaAberta_ListaParaGeracaoImpl());
		DaoBaseComum.setProximo("PaginaVendaAberta_ListaParaGeracao", new GeraPaginaVendaAbertaImpl());
		DaoBaseComum.setProximo("GeraPaginaVendaAberta", new PaginaVendaAberta_AtualizaPorGeracaoImpl());
	}
}
