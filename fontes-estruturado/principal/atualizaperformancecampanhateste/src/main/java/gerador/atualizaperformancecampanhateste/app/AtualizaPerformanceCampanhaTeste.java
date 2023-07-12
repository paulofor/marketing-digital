package gerador.atualizaperformancecampanhateste.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import gerador.atualizaperformancecampanhateste.passo.*;

import br.com.gersis.daobase.comum.DaoBaseComum;

public class AtualizaPerformanceCampanhaTeste {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
			System.out.print("AtualizaPerformanceCampanhaTeste");
			System.out.println("(07/07/2023 17:24:16)");
		try {
			carregaProp();
			AtualizaPerformanceCampanhaTesteObj obj = new AtualizaPerformanceCampanhaTesteObj();
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
		DaoBaseComum.setProximo("AtualizaPerformanceCampanhaTesteObj", new CampanhaAdsTeste_ObtemListaParaConsultarPerformance());
		DaoBaseComum.setProximo("CampanhaAdsTeste_ObtemListaParaConsultarPerformance", new ConsultaGoogleAdsPerformance());
		DaoBaseComum.setProximo("ConsultaGoogleAdsPerformance", new CampanhaAdsTeste_AtualizaCampanhaPerformance());
	}
}
