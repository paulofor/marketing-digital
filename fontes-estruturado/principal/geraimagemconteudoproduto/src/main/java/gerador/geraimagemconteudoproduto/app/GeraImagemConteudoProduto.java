package gerador.geraimagemconteudoproduto.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.io.FileWriter;
import java.io.PrintWriter;

import gerador.geraimagemconteudoproduto.passo.*;
import gerador.geraimagemconteudoproduto.passo.impl.*;
import br.com.gersis.daobase.comum.DaoBaseComum;

public class GeraImagemConteudoProduto {

	private static String UrlLoopback = "";

	public static void main(String[] args) {
		System.out.print("GeraImagemConteudoProduto");
		System.out.println("(26/03/2024 19:04:45)");
		try {
			carregaProp();
			GeraImagemConteudoProdutoObj obj = new GeraImagemConteudoProdutoObj();
			obj.executa();
			System.out.println("finalizou");
			System.exit(0);
		} catch (Exception e) {
			gravarErro(e);
		}
	}


	private static void gravarErro(Exception e) {
		try {
			FileWriter fileWriter = new FileWriter("GeraImagemConteudoProduto.err", true);
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
		DaoBaseComum.setProximo("GeraImagemConteudoProdutoObj", new ConteudoProdutoKiwify_ListaParaGeracaoImagemImpl());
		DaoBaseComum.setProximo("ConteudoProdutoKiwify_ListaParaGeracaoImagem", new AcessaDalleImpl());
		DaoBaseComum.setProximo("AcessaDalle", new ImportaImagemImpl());
		DaoBaseComum.setProximo("ImportaImagem", new ImagemConteudo_RegistraImagemImpl());
	}
}
