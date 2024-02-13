package gerador.obtemvendashotmart.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;

import gerador.obtemvendashotmart.passo.*;
import gerador.obtemvendashotmart.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class ObtemVendasHotmart {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("ObtemVendasHotmart");
		System.out.println("(03/02/2024 22:08:56)");
		try {
			carregaProp();
			ObtemVendasHotmartObj obj = new ObtemVendasHotmartObj();
			obj.executa();
			System.out.println("finalizou");
			System.exit(0);
		} catch (Exception e) {
			gravarErro(e);
		}
	}


	private static void gravarErro(Exception e) {
		try {
			FileWriter fileWriter = new FileWriter("ObtemVendasHotmart.err", true);
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
		DaoBaseComum.setProximo("ObtemVendasHotmartObj", new TokenAcesso_ObtemPorNomeImpl());
		DaoBaseComum.setProximo("TokenAcesso_ObtemPorNome", new ColetaProdutoHotmartImpl());
		DaoBaseComum.setProximo("ColetaProdutoHotmart", new VisitaProdutoHotmart_InsereListaProdutoHotmartImpl());
		DaoBaseComum.setProximo("VisitaProdutoHotmart_InsereListaProdutoHotmart", new VisitaProdutoHotmart_AtualizaMaisRecenteProdutoHotmartImpl());
		DaoBaseComum.setProximo("VisitaProdutoHotmart_AtualizaMaisRecenteProdutoHotmart", new ProdutoAfiliadoHotmart_AtualizaTemperaturaAtualImpl());
		DaoBaseComum.setProximo("ProdutoAfiliadoHotmart_AtualizaTemperaturaAtual", new VisitaProdutoHotmart_AjustaDeltaTemperaturaImpl());
	}
}
