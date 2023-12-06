package gerador.obtemvendashotmart.passo.impl;


import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;

import org.apache.http.message.BasicHeader;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import br.com.gersis.loopback.modelo.TokenAcesso;
import br.com.gersis.loopback.modelo.VisitaProdutoHotmart;
import gerador.obtemvendashotmart.callback.ICallbackJSON;
import gerador.obtemvendashotmart.callback.ParserJson2;
import gerador.obtemvendashotmart.loopback.DatasetAplicacao;
import gerador.obtemvendashotmart.passo.ColetaProdutoHotmart;




public class ColetaProdutoHotmartImpl extends ColetaProdutoHotmart implements ICallbackJSON{

	final int TOTAL_PAGINA = 200;
	private int paginaAtual = 0;
	private boolean concluidoInterno = false;
	
	public boolean executaCustom(TokenAcesso token) {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
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
		return true;
	}
	
	

	private void executaPagina(TokenAcesso token) {
		ParserJson2 parser = new ParserJson2(this);
		parser.addHeader(new BasicHeader("Content-Type","application/json"));
		parser.addHeader(new BasicHeader("Authorization","Bearer " + token.getToken()));
		parser.start();
	}

	public URL getUrl() throws MalformedURLException {
		return new URL("https://api-affiliation-market.hotmart.com/v1/market/hottest/search");

	}
	public String getBody() {
		return "{\"name\":\"hottest\",\"rows\":100,\"locale\":\"PT_BR\",\"page\":\"" + this.paginaAtual + "\"}";
	}

	public void setJsonList(JSONArray result) {
		// TODO Auto-generated method stub
		
	}

	public void setJson(JSONObject result) {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ds.getListaVisita().clear();
		System.out.println("Recebi objeto");
		JSONArray produtos = result.getJSONArray("content");
		System.out.println("Produtos:" + produtos.length());
		for (int i=0; i<produtos.length(); i++) {
			VisitaProdutoHotmart produtoObj = criaVisita(produtos.getJSONObject(i));
			ds.getListaVisita().add(produtoObj);
		}

		this.executaProximo();
	}

	
	private VisitaProdutoHotmart criaVisita(JSONObject item) throws JSONException {
		VisitaProdutoHotmart saida = new VisitaProdutoHotmart();
		JSONObject produto = item.getJSONObject("product");
		JSONObject produtor = item.getJSONObject("producer");
		JSONObject afiliacao = item.getJSONObject("affiliation");
		
		saida.setHotmartId(produto.getInt("id"));
		saida.setNome(produto.getString("name"));
		saida.setImagem(produto.getString("image"));
		saida.setTemperatura(produto.getInt("temperature"));
		saida.setCategoria(produto.getString("category"));
		saida.setFormato(produto.getString("format"));
		saida.setReviewRating(produto.getDouble("reviewRating"));
		saida.setTotalAnswers(produto.getInt("totalAnswers"));
		saida.setBlueprint(produto.getInt("blueprint"));
		
		saida.setAfiliacaoTipo(afiliacao.getInt("type"));
		saida.setAfiliacaoValor(afiliacao.getJSONObject("commission").getJSONObject("price").getDouble("value"));
		saida.setAfiliacaoPercentual(afiliacao.getJSONObject("commission").getDouble("percentage"));
		
		saida.setProdutorNome(produtor.getString("name"));
		saida.setProdutorCodigoHotmart(produtor.getString("ucode"));
		
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

