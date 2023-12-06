package gerador.atualizaafiliados.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private TokenAcesso token;
	private List<ProdutoAfiliadoHotmart> listaAfiliado;


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
}
