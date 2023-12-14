package gerador.obtemhotlink.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ProdutoAfiliadoHotmart produtoCorrente;
	private List<ProdutoAfiliadoHotlink> listaHotlink;
	private TokenAcesso token;


	public void setProdutoCorrente(ProdutoAfiliadoHotmart valor) { 
		this.produtoCorrente = valor;
	}
	public ProdutoAfiliadoHotmart getProdutoCorrente() { 
		return this.produtoCorrente;
	}
	public void setListaHotlink(List<ProdutoAfiliadoHotlink> valor) { 
		this.listaHotlink = valor;
	}
	public List<ProdutoAfiliadoHotlink> getListaHotlink() { 
		return this.listaHotlink;
	}
	public void setToken(TokenAcesso valor) { 
		this.token = valor;
	}
	public TokenAcesso getToken() { 
		return this.token;
	}
}
