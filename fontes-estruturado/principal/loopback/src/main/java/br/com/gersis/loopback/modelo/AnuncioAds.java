package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;


public class AnuncioAds extends Model {

	private String titulo1;
	private String titulo2;
	private String titulo3;
	private String descricao1;
	private String descricao2;
	// Relacionamentos 1
	// Relacionamentos N

	public void setTitulo1(String valor) { 
		this.titulo1 = valor;
	}
	public String getTitulo1() { 
		return this.titulo1;
	}
	public void setTitulo2(String valor) { 
		this.titulo2 = valor;
	}
	public String getTitulo2() { 
		return this.titulo2;
	}
	public void setTitulo3(String valor) { 
		this.titulo3 = valor;
	}
	public String getTitulo3() { 
		return this.titulo3;
	}
	public void setDescricao1(String valor) { 
		this.descricao1 = valor;
	}
	public String getDescricao1() { 
		return this.descricao1;
	}
	public void setDescricao2(String valor) { 
		this.descricao2 = valor;
	}
	public String getDescricao2() { 
		return this.descricao2;
	}

}
