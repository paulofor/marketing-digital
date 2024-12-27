package gerador.montaentregavel.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import gerador.montaentregavel.passo.*;
import gerador.montaentregavel.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class MontaEntregavel {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("MontaEntregavel");
		System.out.println("(13/12/2024 11:00:47)");
		try {
			carregaProp();
			MontaEntregavelObj obj = new MontaEntregavelObj();
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
			FileWriter fileWriter = new FileWriter("MontaEntregavel.err", true);
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
		DaoBaseComum.setProximo("MontaEntregavelObj", new EntregavelProduto_ListaComDetalheImpl());
		DaoBaseComum.setProximo("EntregavelProduto_ListaComDetalhe", new JuntaDetalheImpl());
		DaoBaseComum.setProximo("JuntaDetalhe", new ConvertePdfImpl());
		DaoBaseComum.setProximo("ConvertePdf", new GeraImagemImpl());
	}
}
