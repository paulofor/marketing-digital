package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ScriptGeraVideo extends Model {


	private String nome;
	private String arquivo;
	private String descricao;
	private String fonte;
	// Relacionamentos 1
	// Relacionamentos N
	private List<VideoVsl> VideoVsls;

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
			obj.put("arquivo", arquivo);
			obj.put("descricao", descricao);
			obj.put("fonte", fonte);
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
	public void setArquivo(String valor) { 
		this.arquivo = valor;
	}
	public String getArquivo() { 
		return this.arquivo;
	}
	public void setDescricao(String valor) { 
		this.descricao = valor;
	}
	public String getDescricao() { 
		return this.descricao;
	}
	public void setFonte(String valor) { 
		this.fonte = valor;
	}
	public String getFonte() { 
		return this.fonte;
	}

	public List<VideoVsl> getVideoVsls() {
		return  VideoVsls;
	}
	public void setVideoVsls(List<VideoVsl> valores) {
		this.VideoVsls = new ArrayList<VideoVsl>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new VideoVsl();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.VideoVsls.add((VideoVsl) objeto);
		}
	}
}
