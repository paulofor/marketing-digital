package gerador.obtemhotlink.passo.impl;


import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.message.BasicHeader;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import br.com.gersis.loopback.modelo.ProdutoAfiliadoHotlink;
import br.com.gersis.loopback.modelo.ProdutoAfiliadoHotmart;
import br.com.gersis.loopback.modelo.TokenAcesso;
import gerador.obtemhotlink.callback.ICallbackJSON;
import gerador.obtemhotlink.callback.ParserJson2;
import gerador.obtemhotlink.passo.ObtemHotlinkHotmart;



public class ObtemHotlinkHotmartImpl extends ObtemHotlinkHotmart  implements ICallbackJSON{


	private boolean concluidoInterno = false;
	
	private List<ProdutoAfiliadoHotlink> listaLink = new ArrayList<ProdutoAfiliadoHotlink>();
	
	
	ProdutoAfiliadoHotmart produtoCorrente = null;
	
	@Override
	protected boolean executaCustom(ProdutoAfiliadoHotmart produtoCorrente, TokenAcesso token) {
		this.produtoCorrente = produtoCorrente;
		executaPagina(token);
		while (!this.concluidoInterno) {
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		this.saidaListaHotlink = listaLink;
		this.saidaProdutoCorrente = this.produtoCorrente;
		return true;
	}



	
	

	private void executaPagina(TokenAcesso token) {
		ParserJson2 parser = new ParserJson2(this);
		parser.addHeader(new BasicHeader("Content-Type","application/json"));
		parser.addHeader(new BasicHeader("Authorization","Bearer " + token.getToken()));
		parser.start();
	}

	public URL getUrl() throws MalformedURLException {
		return new URL("https://api-affiliation.hotmart.com/v2/hotlink/" + produtoCorrente.getHotmartId() +"?page=1&rows=200");

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
		//System.out.println("Recebi objeto");
		JSONObject hotlinks = result.getJSONObject("hotlinks");
		try {
			this.produtoCorrente.setSalesPage(hotlinks.getString("salesPage"));
			this.produtoCorrente.setPublicProfileLink(hotlinks.getString("publicProfileLink"));
		} catch (Exception e) {
			System.out.println("Erro de json em : " + result.toString());
		}
		JSONArray paginas = hotlinks.getJSONArray("alternativePages");
		System.out.println("-----------------------------------------------------------------");
		System.out.println(this.produtoCorrente.getNome() + " possui " + paginas.length() + " hotlinks.");
		System.out.println("-----------------------------------------------------------------");
		
		for (int i=0; i<paginas.length(); i++) {
			ProdutoAfiliadoHotlink hotlinkObj = criaHotlink(paginas.getJSONObject(i));
			this.listaLink.add(hotlinkObj);
			
		}
		this.concluidoInterno = true;
	}

	
	private ProdutoAfiliadoHotlink criaHotlink(JSONObject item) throws JSONException {
		ProdutoAfiliadoHotlink saida = new ProdutoAfiliadoHotlink();
		saida.setUrl(item.getString("url"));
		saida.setHotlink(item.getString("hotlink"));
		saida.setDescricao(item.getString("description"));
		saida.setHasHotLead(item.getBoolean("hasHotLead")?1:0);
		saida.setSpecialCampaign(item.getBoolean("specialCampaign")?1:0);
		saida.setId(item.getInt("id"));
		saida.setHotmartId(this.produtoCorrente.getHotmartId());
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

