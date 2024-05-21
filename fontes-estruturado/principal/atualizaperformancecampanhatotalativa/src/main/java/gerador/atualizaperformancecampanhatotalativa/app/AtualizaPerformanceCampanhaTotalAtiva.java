package gerador.atualizaperformancecampanhatotalativa.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import gerador.atualizaperformancecampanhatotalativa.passo.*;
import gerador.atualizaperformancecampanhatotalativa.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class AtualizaPerformanceCampanhaTotalAtiva {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("AtualizaPerformanceCampanhaTotalAtiva");
		System.out.println("(20/05/2024 18:36:20)");
		try {
			carregaProp();
			AtualizaPerformanceCampanhaTotalAtivaObj obj = new AtualizaPerformanceCampanhaTotalAtivaObj();
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
			FileWriter fileWriter = new FileWriter("AtualizaPerformanceCampanhaTotalAtiva.err", true);
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
		DaoBaseComum.setProximo("AtualizaPerformanceCampanhaTotalAtivaObj", new CampanhaAdsMetrica_LimpaMaisRecenteImpl());
		DaoBaseComum.setProximo("CampanhaAdsMetrica_LimpaMaisRecente", new ContaGoogle_ListaCompletaImpl());
		DaoBaseComum.setProximo("ContaGoogle_ListaCompleta", new ObtemDadosContaGoogleImpl());
		DaoBaseComum.setProximo("ObtemDadosContaGoogle", new ContaGoogleMetricaMes_AtualizaDiaContaImpl());
		DaoBaseComum.setProximo("ContaGoogleMetricaMes_AtualizaDiaConta", new ConsultaGoogleAdsListaAtivaPorContaImpl());
		DaoBaseComum.setProximo("ConsultaGoogleAdsListaAtivaPorConta", new CampanhaAdsMetrica_InsereListaMetricaImpl());
		DaoBaseComum.setProximo("CampanhaAdsMetrica_InsereListaMetrica", new CampanhaAdsMetrica_AjustaCampanhaProdutoImpl());
	}
}
