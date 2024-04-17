package gerador.geralistaconteudoproduto.passo;


import gerador.geralistaconteudoproduto.loopback.DaoAplicacao;
import gerador.geralistaconteudoproduto.loopback.DatasetAplicacao;
import gerador.geralistaconteudoproduto.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class GeraListaConteudoProdutoObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		EntregavelProduto_ListaParaGerarLista exec = new EntregavelProduto_ListaParaGerarListaImpl();
		exec.setComum(ds);
		exec.executa();
		executaFinalizacao(ds);
		finalizar();
	}
	private void executaFinalizacao(DatasetAplicacao ds) {
	}
	public int getNumPasso() {
		return 1;
	}
}

