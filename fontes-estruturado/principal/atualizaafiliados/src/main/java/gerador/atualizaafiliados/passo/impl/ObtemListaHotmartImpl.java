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
import br.com.gersis.loopback.modelo.TokenAcesso;
import br.com.gersis.loopback.modelo.VisitaProdutoHotmart;
import gerador.atualizaafiliados.callback.ICallbackJSON;
import gerador.atualizaafiliados.callback.ParserJson2;
import gerador.atualizaafiliados.passo.ObtemListaHotmart;



public class ObtemListaHotmartImpl extends ObtemListaHotmart implements ICallbackJSON{

	

	final int TOTAL_PAGINA = 200;
	private int paginaAtual = 0;
	private boolean concluidoInterno = false;
	
	private List<ProdutoAfiliadoHotmart> listaAfiliado = new ArrayList<ProdutoAfiliadoHotmart>();
	
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
		/*
		ds.setListaVisita(new ArrayList<VisitaProdutoHotmart>());
		int totalPagina = TOTAL_PAGINA;
		for (int pag=1;pag<=totalPagina;pag++) {
			this.paginaAtual = pag;
			this.concluido = false;
			executaPagina(token);
			while (!this.concluido) {
				try {
					Thread.sleep(getTempo());
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}
		ds.getListaVisita().clear();
		*/
		return true;
	}
	
	

	private void executaPagina(TokenAcesso token) {
		ParserJson2 parser = new ParserJson2(this);
		parser.addHeader(new BasicHeader("Content-Type","application/json"));
		parser.addHeader(new BasicHeader("Authorization","Bearer " + token.getToken()));
		parser.start();
	}

	public URL getUrl() throws MalformedURLException {
		return new URL("https://api-affiliation.hotmart.com/v2/product/affiliate?page=1&rows=100");

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
			ProdutoAfiliadoHotmart produtoObj = criaVisita(produtos.getJSONObject(i));
			boolean enabled = produtos.getJSONObject(i).getBoolean("enabled");
			boolean revisedApproved = produtos.getJSONObject(i).getBoolean("revisedApproved");
			boolean watingAffiliationApprove = produtos.getJSONObject(i).getBoolean("watingAffiliationApprove");
			boolean deleted = produtos.getJSONObject(i).getBoolean("deleted");
			
			if (enabled && revisedApproved && !watingAffiliationApprove) {
				this.listaAfiliado.add(produtoObj);
			} else {
				System.out.println(produtos.getJSONObject(i).toString());
			}
			
		}
		this.saidaListaAfiliado = this.listaAfiliado;
		this.concluidoInterno = true;
	}

	
	private ProdutoAfiliadoHotmart criaVisita(JSONObject item) throws JSONException {
		ProdutoAfiliadoHotmart saida = new ProdutoAfiliadoHotmart();
		saida.setHotmartId(item.getInt("id"));
		saida.setNome(item.getString("name"));
		saida.setHotmartUcode(item.getString("ucode"));
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

