package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PalavraChaveRaiz extends Model {


	private String palavra;
	private int ativo;
	private String dataUltimaAtualizacao;
	// Relacionamentos 1
	// Relacionamentos N
	private List<PalavraChaveEstatistica> PalavraChaveEstatisticas;

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
			obj.put("palavra", palavra);
			obj.put("ativo", ativo);
			obj.put("dataUltimaAtualizacao", dataUltimaAtualizacao);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setPalavra(String valor) { 
		this.palavra = valor;
	}
	public String getPalavra() { 
		return this.palavra;
	}
	public void setAtivo(int valor) { 
		this.ativo = valor;
	}
	public int getAtivo() { 
		return this.ativo;
	}
	public void setDataUltimaAtualizacao(String valor) { 
		this.dataUltimaAtualizacao = valor;
	}
	public String getDataUltimaAtualizacao() { 
		return this.dataUltimaAtualizacao;
	}

	public List<PalavraChaveEstatistica> getPalavraChaveEstatisticas() {
		return  PalavraChaveEstatisticas;
	}
	public void setPalavraChaveEstatisticas(List<PalavraChaveEstatistica> valores) {
		this.PalavraChaveEstatisticas = new ArrayList<PalavraChaveEstatistica>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PalavraChaveEstatistica();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PalavraChaveEstatisticas.add((PalavraChaveEstatistica) objeto);
		}
	}
}
