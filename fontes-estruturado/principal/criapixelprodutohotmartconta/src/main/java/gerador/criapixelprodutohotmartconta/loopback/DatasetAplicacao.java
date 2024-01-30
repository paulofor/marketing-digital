package gerador.criapixelprodutohotmartconta.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ContaGoogle contaCorrente;
	private List<PixelProdutoHotmartConta> listaPixelProduto;
	private List<ProdutoHotmartConta> listaProdutoConta;


	public void setContaCorrente(ContaGoogle valor) { 
		this.contaCorrente = valor;
	}
	public ContaGoogle getContaCorrente() { 
		return this.contaCorrente;
	}
	public void setListaPixelProduto(List<PixelProdutoHotmartConta> valor) { 
		this.listaPixelProduto = valor;
	}
	public List<PixelProdutoHotmartConta> getListaPixelProduto() { 
		return this.listaPixelProduto;
	}
	public void setListaProdutoConta(List<ProdutoHotmartConta> valor) { 
		this.listaProdutoConta = valor;
	}
	public List<ProdutoHotmartConta> getListaProdutoConta() { 
		return this.listaProdutoConta;
	}
}
