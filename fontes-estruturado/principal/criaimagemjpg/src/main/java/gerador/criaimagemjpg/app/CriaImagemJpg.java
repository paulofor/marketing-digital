package gerador.criaimagemjpg.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import gerador.criaimagemjpg.passo.*;
import gerador.criaimagemjpg.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class CriaImagemJpg {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("CriaImagemJpg");
		System.out.println("(13/12/2024 11:00:42)");
		try {
			carregaProp();
			CriaImagemJpgObj obj = new CriaImagemJpgObj();
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
			FileWriter fileWriter = new FileWriter("CriaImagemJpg.err", true);
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
		DaoBaseComum.setProximo("CriaImagemJpgObj", new ImagemPaginaVenda_ListaParaJpgImpl());
		DaoBaseComum.setProximo("ImagemPaginaVenda_ListaParaJpg", new CriaJpgEnviaImpl());
		DaoBaseComum.setProximo("CriaJpgEnvia", new ImagemPaginaVenda_RegistraJpgImpl());
	}
}
