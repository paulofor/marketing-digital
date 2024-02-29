package gerador.atualizaafiliados.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;

import gerador.atualizaafiliados.passo.*;
import gerador.atualizaafiliados.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class AtualizaAfiliados {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("AtualizaAfiliados");
		System.out.println("(29/02/2024 00:07:19)");
		try {
			carregaProp();
			AtualizaAfiliadosObj obj = new AtualizaAfiliadosObj();
			obj.executa();
			System.out.println("finalizou");
			System.exit(0);
		} catch (Exception e) {
			gravarErro(e);
		}
	}


	private static void gravarErro(Exception e) {
		try {
			FileWriter fileWriter = new FileWriter("AtualizaAfiliados.err", true);
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
		DaoBaseComum.setProximo("AtualizaAfiliadosObj", new TokenAcesso_ObtemPorNomeImpl());
		DaoBaseComum.setProximo("TokenAcesso_ObtemPorNome", new ObtemListaHotmartImpl());
		DaoBaseComum.setProximo("ObtemListaHotmart", new ProdutoAfiliadoHotmart_AtualizaAfiliadosImpl());
		DaoBaseComum.setProximo("ProdutoAfiliadoHotmart_AtualizaAfiliados", new ObtemListaHotmartPendenteImpl());
		DaoBaseComum.setProximo("ObtemListaHotmartPendente", new ProdutoAfiliadoHotmartPendente_AtualizaPendenteImpl());
		DaoBaseComum.setProximo("ProdutoAfiliadoHotmartPendente_AtualizaPendente", new TokenAcesso_RegistraAcessoImpl());
	}
}
