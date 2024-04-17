package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class WhatsappGrupoPadraoMensagem extends Model {


	private String nome;
	private int geraMensagem;
	// Relacionamentos 1
	private ProdutoProprio ProdutoProprio;
	private EntregavelProduto EntregavelProduto;
	// Relacionamentos N
	private List<WhatsappGrupoDiaAgenda> WhatsappGrupoDiaAgendas;
	private List<WhatsappMensagemTexto> WhatsappMensagemTextos;

	public void setId(Long id) {
		this.setIdObjeto(id);
	}
	public void setId(Integer id) {
		this.setIdObjeto(id);
	}

	public int getIdInteger() {
		return new Integer(getId().toString());
	}
	public long getIdLong() {
		return new Long(getId().toString());
	}

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("nome", nome);
			obj.put("geraMensagem", geraMensagem);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setGeraMensagem(int valor) { 
		this.geraMensagem = valor;
	}
	public int getGeraMensagem() { 
		return this.geraMensagem;
	}

	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public EntregavelProduto getEntregavelProduto() {
		return EntregavelProduto;
	}
	public void setEntregavelProduto(HashMap valor) {
		this.EntregavelProduto = new EntregavelProduto();
		BeanUtil.setProperties(this.EntregavelProduto, (Map<String, ? extends Object>) valor, true);
	}
	public List<WhatsappGrupoDiaAgenda> getWhatsappGrupoDiaAgendas() {
		return  WhatsappGrupoDiaAgendas;
	}
	public void setWhatsappGrupoDiaAgendas(List<WhatsappGrupoDiaAgenda> valores) {
		this.WhatsappGrupoDiaAgendas = new ArrayList<WhatsappGrupoDiaAgenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new WhatsappGrupoDiaAgenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.WhatsappGrupoDiaAgendas.add((WhatsappGrupoDiaAgenda) objeto);
		}
	}
	public List<WhatsappMensagemTexto> getWhatsappMensagemTextos() {
		return  WhatsappMensagemTextos;
	}
	public void setWhatsappMensagemTextos(List<WhatsappMensagemTexto> valores) {
		this.WhatsappMensagemTextos = new ArrayList<WhatsappMensagemTexto>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new WhatsappMensagemTexto();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.WhatsappMensagemTextos.add((WhatsappMensagemTexto) objeto);
		}
	}
}
