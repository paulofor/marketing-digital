package gerador.chatgptrespondecheckout.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import gerador.chatgptrespondecheckout.passo.*;
import gerador.chatgptrespondecheckout.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class ChatGptRespondeCheckout {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("ChatGptRespondeCheckout");
		System.out.println("(13/12/2024 11:00:47)");
		try {
			carregaProp();
			ChatGptRespondeCheckoutObj obj = new ChatGptRespondeCheckoutObj();
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
			FileWriter fileWriter = new FileWriter("ChatGptRespondeCheckout.err", true);
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
		//UrlLoopback = "http://localhost:23101/api";
		DaoBaseComum.setUrl(UrlLoopback);
	}

	private static void preparaComum() {
		DaoBaseComum.setUrl(UrlLoopback);
		DaoBaseComum.setProximo("ChatGptRespondeCheckoutObj", new ProdutoProprio_ObtemParaCriacaoPaginaCheckoutImpl());
		DaoBaseComum.setProximo("ProdutoProprio_ObtemParaCriacaoPaginaCheckout", new ElementoPaginaCheckout_ObtemListaAtivoImpl());
		DaoBaseComum.setProximo("ElementoPaginaCheckout_ObtemListaAtivo", new ChatGptCompletaElementoCheckoutImpl());
		DaoBaseComum.setProximo("ChatGptCompletaElementoCheckout", new ElementoCheckoutProduto_InsereItemImpl());
	}
}
