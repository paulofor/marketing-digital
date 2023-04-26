package validador.marketingdigital.integracao.lookback.modelo;

import org.json.JSONException;
import org.json.JSONObject;

import com.strongloop.android.loopback.Model;

public class VisitaProdutoHotmart extends Model{

	private long hotmartId;
	private String nome;
	private String imagem;
	private double temperatura;
	private String categoria;
	private String formato;
	private double reviewRating;
	private int totalAnswers;
	private int afiliacaoTipo;
	private double afiliacaoValor;
	private double afiliacaoPercentual;
	private String produtorNome;
	private String produtorCodigoHotmart;
	private int blueprint;
	
	public VisitaProdutoHotmart() {
		super();
	}
	

	
	
	
	
	public long getHotmartId() {
		return hotmartId;
	}






	public void setHotmartId(int hotmartId) {
		this.hotmartId = hotmartId;
	}






	public String getNome() {
		return nome;
	}






	public void setNome(String nome) {
		this.nome = nome;
	}






	public String getImagem() {
		return imagem;
	}






	public void setImagem(String imagem) {
		this.imagem = imagem;
	}






	public double getTemperatura() {
		return temperatura;
	}






	public void setTemperatura(double temperatura) {
		this.temperatura = temperatura;
	}






	public String getCategoria() {
		return categoria;
	}






	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}






	public String getFormato() {
		return formato;
	}






	public void setFormato(String formato) {
		this.formato = formato;
	}






	public double getReviewRating() {
		return reviewRating;
	}






	public void setReviewRating(double reviewRating) {
		this.reviewRating = reviewRating;
	}






	public int getTotalAnswers() {
		return totalAnswers;
	}






	public void setTotalAnswers(int totalAnswers) {
		this.totalAnswers = totalAnswers;
	}






	public int getAfiliacaoTipo() {
		return afiliacaoTipo;
	}






	public void setAfiliacaoTipo(int afiliacaoTipo) {
		this.afiliacaoTipo = afiliacaoTipo;
	}






	public double getAfiliacaoValor() {
		return afiliacaoValor;
	}






	public void setAfiliacaoValor(double afiliacaoValor) {
		this.afiliacaoValor = afiliacaoValor;
	}






	public double getAfiliacaoPercentual() {
		return afiliacaoPercentual;
	}






	public void setAfiliacaoPercentual(double afiliacaoPercentual) {
		this.afiliacaoPercentual = afiliacaoPercentual;
	}






	public String getProdutorNome() {
		return produtorNome;
	}






	public void setProdutorNome(String produtorNome) {
		this.produtorNome = produtorNome;
	}






	public String getProdutorCodigoHotmart() {
		return produtorCodigoHotmart;
	}






	public void setProdutorCodigoHotmart(String produtorCodigoHotmart) {
		this.produtorCodigoHotmart = produtorCodigoHotmart;
	}






	public int getBlueprint() {
		return blueprint;
	}






	public void setBlueprint(int blueprint) {
		this.blueprint = blueprint;
	}






	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("hotmartId", hotmartId);
			obj.put("nome", nome);
			obj.put("imagem", imagem);
			obj.put("temperatura", temperatura);
			obj.put("categoria", categoria);
			obj.put("formato", formato);
			obj.put("reviewRating", reviewRating);
			obj.put("totalAnswers", totalAnswers);
			obj.put("afiliacaoTipo", afiliacaoTipo);
			obj.put("afiliacaoValor", afiliacaoValor);
			obj.put("afiliacaoPercentual", afiliacaoPercentual);
			obj.put("produtorNome", produtorNome);
			obj.put("produtorCodigoHotmart", produtorCodigoHotmart);
			obj.put("blueprint", blueprint);
			//obj.put("afiliacaoTipo", afiliacaoTipo);

		} catch (JSONException e) {
			e.printStackTrace();
		}
		return obj;
	}
	
	public VisitaProdutoHotmart(JSONObject item) throws JSONException {
		JSONObject produto = item.getJSONObject("product");
		JSONObject produtor = item.getJSONObject("producer");
		JSONObject afiliacao = item.getJSONObject("affiliation");
		
		this.hotmartId = produto.getInt("id");
		this.nome = produto.getString("name");
		this.imagem = produto.getString("image");
		this.temperatura = produto.getDouble("temperature");
		this.categoria = produto.getString("category");
		this.formato = produto.getString("format");
		this.reviewRating = produto.getDouble("reviewRating");
		this.totalAnswers = produto.getInt("totalAnswers");
		this.blueprint = produto.getInt("blueprint");
		
		this.afiliacaoTipo = afiliacao.getInt("type");
		this.afiliacaoValor = afiliacao.getJSONObject("commission").getJSONObject("price").getDouble("value");
		this.afiliacaoPercentual = afiliacao.getJSONObject("commission").getDouble("percentage");
		
		this.produtorNome = produtor.getString("name");
		this.produtorCodigoHotmart = produtor.getString("ucode");
	}
	
	
}
