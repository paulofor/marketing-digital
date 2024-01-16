package gerador.criaebookparaproduto.passo.pdf;

import java.util.List;

import org.json.JSONObject;

import br.com.gersis.loopback.modelo.ProdutoProprio;
import br.com.gersis.loopback.modelo.ProdutoProprioItemNivel1;

public abstract class GeradorBase {

	protected ProdutoProprio produto;
	protected List<ProdutoProprioItemNivel1> listaItem;
	protected String arquivo = "/home/usuario/aplicacoes/MarketingDigital/pagina-venda-pesquisa-desenvolvimento/recursos/arquivo.pdf";
	
	public GeradorBase(ProdutoProprio produto, List<ProdutoProprioItemNivel1> listaItem) {
		this.produto = produto;
		this.listaItem = listaItem;
	}

	protected String getTermo(ProdutoProprioItemNivel1 item) {
		return item.getNome();
	}
	
	protected String getExplicacao(ProdutoProprioItemNivel1 item) {
		JSONObject dado = new JSONObject(item.getJson());
		return limparTexto(dado.getString("explicacao"));
	}
	
	protected String getHistorico(ProdutoProprioItemNivel1 item) {
		JSONObject dado = new JSONObject(item.getJson());
		try {
			return limparTexto(dado.getString("historico"));
		} catch (Exception e) {
			return "";
		}
	}
	
	protected String limparTexto(String texto) {
	    // Substituir quebras de linha por espaços em branco
	    texto = texto.replaceAll("\\r|\\n", " ");
	    texto = texto.replace("\u200B", " ");
	    return texto;
	}
}
