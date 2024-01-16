package gerador.criaebookparaproduto.passo.pdf;

import java.util.List;

import br.com.gersis.loopback.modelo.ProdutoProprio;
import br.com.gersis.loopback.modelo.ProdutoProprioItemNivel1;

public class GeradorApachePdf extends GeradorBase{

	public GeradorApachePdf(ProdutoProprio produto, List<ProdutoProprioItemNivel1> listaItem) {
		super(produto, listaItem);
	}

}
