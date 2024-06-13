package gerador.monitorintraday.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import gerador.monitorintraday.passo.*;
import gerador.monitorintraday.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class MonitorIntraday {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("MonitorIntraday");
		System.out.println("(13/06/2024 07:40:14)");
		try {
			carregaProp();
			MonitorIntradayObj obj = new MonitorIntradayObj();
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
			FileWriter fileWriter = new FileWriter("MonitorIntraday.err", true);
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
		DaoBaseComum.setProximo("MonitorIntradayObj", new CampanhaAdsMetricaIntraday_DesligarTodosImpl());
		DaoBaseComum.setProximo("CampanhaAdsMetricaIntraday_DesligarTodos", new ContaGoogle_ListaCompletaImpl());
		DaoBaseComum.setProximo("ContaGoogle_ListaCompleta", new ConsultaGoogleAdsListaAtivaPorContaImpl());
		DaoBaseComum.setProximo("ConsultaGoogleAdsListaAtivaPorConta", new ConsultaGoogleGrupoAdsListaAtivaPorContaImpl());
		DaoBaseComum.setProximo("ConsultaGoogleGrupoAdsListaAtivaPorConta", new ConsultaGoogleGrupoAudienciaAdsListaAtivaPorContaImpl());
		DaoBaseComum.setProximo("ConsultaGoogleGrupoAudienciaAdsListaAtivaPorConta", new ConsultaGoogleGrupoLocaisAdsListaAtivaPorContaImpl());
		DaoBaseComum.setProximo("ConsultaGoogleGrupoLocaisAdsListaAtivaPorConta", new CampanhaAdsMetricaIntraday_AtualizaIntradayImpl());
		DaoBaseComum.setProximo("CampanhaAdsMetricaIntraday_AtualizaIntraday", new ContaGoogle_AcessouIntradayImpl());
	}
}
