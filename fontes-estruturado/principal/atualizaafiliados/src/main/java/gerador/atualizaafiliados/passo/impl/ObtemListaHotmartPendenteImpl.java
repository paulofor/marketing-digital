package gerador.atualizaafiliados.passo.impl;


import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.message.BasicHeader;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import br.com.gersis.loopback.modelo.ProdutoAfiliadoHotmart;
import br.com.gersis.loopback.modelo.ProdutoAfiliadoHotmartPendente;
import br.com.gersis.loopback.modelo.TokenAcesso;
import gerador.atualizaafiliados.callback.ICallbackJSON;
import gerador.atualizaafiliados.callback.ParserJson2;
import gerador.atualizaafiliados.passo.*;



public class ObtemListaHotmartPendenteImpl extends ObtemListaHotmartPendente implements ICallbackJSON{

	

	final int TOTAL_PAGINA = 200;
	private int paginaAtual = 0;
	private boolean concluidoInterno = false;
	
	private List<ProdutoAfiliadoHotmartPendente> listaAfiliadoPendente = new ArrayList<ProdutoAfiliadoHotmartPendente>();
	
	public boolean executaCustom(TokenAcesso token) {
		executaPagina(token);
		while (!this.concluidoInterno) {
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return true;
	}
	
	

	private void executaPagina(TokenAcesso token) {
		ParserJson2 parser = new ParserJson2(this);
		parser.addHeader(new BasicHeader("Content-Type","application/json"));
		parser.addHeader(new BasicHeader("Authorization","Bearer " + token.getToken()));
		parser.start();
	}

	public URL getUrl() throws MalformedURLException {
		return new URL("https://api-affiliation.hotmart.com/v2/product/affiliate/solicitation?page=1&rows=150");

	}
	public String getBody() {
		return "{}";
	}

	public void setJsonList(JSONArray result) {
		// TODO Auto-generated method stub
		System.out.println("Recebi lista");
	}

	public void setJson(JSONObject result) {
		//ds.getListaVisita().clear();
		System.out.println("Recebi objeto");
		JSONArray produtos = result.getJSONArray("data");
		System.out.println("Produtos:" + produtos.length());
		for (int i=0; i<produtos.length(); i++) {
			ProdutoAfiliadoHotmartPendente produtoObj = criaVisita(produtos.getJSONObject(i));
			this.listaAfiliadoPendente.add(produtoObj);
		}
		this.saidaListaPendente = this.listaAfiliadoPendente;
		this.concluidoInterno = true;
	}

	
	private ProdutoAfiliadoHotmartPendente criaVisita(JSONObject item) throws JSONException {
		ProdutoAfiliadoHotmartPendente saida = new ProdutoAfiliadoHotmartPendente();
		saida.setHotmartId(item.getInt("productId"));
		return saida;
	}
	
	public void inicializacao() {
		// TODO Auto-generated method stub
		
	}

	public void finalizacaoOk() {
		// TODO Auto-generated method stub
		
	}

	public void setString(String responseBody) {
		// TODO Auto-generated method stub
		
	}

	

}

