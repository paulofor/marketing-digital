package gerador.chatgptrespondecheckout.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ElementoPaginaCheckout elementoCorrente;
	private ProdutoProprio produto;
	private ElementoCheckoutProduto resposta;


	public void setElementoCorrente(ElementoPaginaCheckout valor) { 
		this.elementoCorrente = valor;
	}
	public ElementoPaginaCheckout getElementoCorrente() { 
		return this.elementoCorrente;
	}
	public void setProduto(ProdutoProprio valor) { 
		this.produto = valor;
	}
	public ProdutoProprio getProduto() { 
		return this.produto;
	}
	public void setResposta(ElementoCheckoutProduto valor) { 
		this.resposta = valor;
	}
	public ElementoCheckoutProduto getResposta() { 
		return this.resposta;
	}
}
