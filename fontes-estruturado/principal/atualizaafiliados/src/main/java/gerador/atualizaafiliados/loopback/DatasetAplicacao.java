package gerador.atualizaafiliados.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private TokenAcesso token;
	private List<ProdutoAfiliadoHotmart> listaAfiliado;
	private List<ProdutoAfiliadoHotmartPendente> listaPendente;


	public void setToken(TokenAcesso valor) { 
		this.token = valor;
	}
	public TokenAcesso getToken() { 
		return this.token;
	}
	public void setListaAfiliado(List<ProdutoAfiliadoHotmart> valor) { 
		this.listaAfiliado = valor;
	}
	public List<ProdutoAfiliadoHotmart> getListaAfiliado() { 
		return this.listaAfiliado;
	}
	public void setListaPendente(List<ProdutoAfiliadoHotmartPendente> valor) { 
		this.listaPendente = valor;
	}
	public List<ProdutoAfiliadoHotmartPendente> getListaPendente() { 
		return this.listaPendente;
	}
}
