package gerador.criaaudiolegendavsl.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import gerador.criaaudiolegendavsl.passo.*;
import gerador.criaaudiolegendavsl.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class CriaAudioLegendaVsl {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("CriaAudioLegendaVsl");
		System.out.println("(06/07/2024 12:36:08)");
		try {
			carregaProp();
			CriaAudioLegendaVslObj obj = new CriaAudioLegendaVslObj();
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
			FileWriter fileWriter = new FileWriter("CriaAudioLegendaVsl.err", true);
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
		DaoBaseComum.setProximo("CriaAudioLegendaVslObj", new VideoVsl_ListaCriaAudioLegendaVslImpl());
		DaoBaseComum.setProximo("VideoVsl_ListaCriaAudioLegendaVsl", new GeraLegendaImpl());
		DaoBaseComum.setProximo("GeraLegenda", new GeraAudioCompletoLegendaImpl());
		DaoBaseComum.setProximo("GeraAudioCompletoLegenda", new VideoVsl_AtualizaAudioLegendaImpl());
	}
}
