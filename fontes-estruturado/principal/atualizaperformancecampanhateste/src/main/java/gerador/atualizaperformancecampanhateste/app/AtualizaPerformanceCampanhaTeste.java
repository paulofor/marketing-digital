package gerador.atualizaperformancecampanhateste.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import gerador.atualizaperformancecampanhateste.passo.*;
import gerador.atualizaperformancecampanhateste.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class AtualizaPerformanceCampanhaTeste {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("AtualizaPerformanceCampanhaTeste");
		System.out.println("(19/06/2024 19:14:31)");
		try {
			carregaProp();
			AtualizaPerformanceCampanhaTesteObj obj = new AtualizaPerformanceCampanhaTesteObj();
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
			FileWriter fileWriter = new FileWriter("AtualizaPerformanceCampanhaTeste.err", true);
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
		DaoBaseComum.setProximo("AtualizaPerformanceCampanhaTesteObj", new CampanhaAdsTeste_ObtemListaParaConsultarPerformanceImpl());
		DaoBaseComum.setProximo("CampanhaAdsTeste_ObtemListaParaConsultarPerformance", new ConsultaGoogleAdsPerformanceImpl());
		DaoBaseComum.setProximo("ConsultaGoogleAdsPerformance", new CampanhaAdsMetrica_InsereMetricaImpl());
	}
}
