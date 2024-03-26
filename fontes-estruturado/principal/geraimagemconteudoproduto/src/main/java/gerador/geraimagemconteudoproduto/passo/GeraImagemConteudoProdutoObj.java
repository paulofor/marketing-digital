package gerador.geraimagemconteudoproduto.passo;


import gerador.geraimagemconteudoproduto.loopback.DaoAplicacao;
import gerador.geraimagemconteudoproduto.loopback.DatasetAplicacao;
import gerador.geraimagemconteudoproduto.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class GeraImagemConteudoProdutoObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ConteudoProdutoKiwify_ListaParaGeracaoImagem exec = new ConteudoProdutoKiwify_ListaParaGeracaoImagemImpl();
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

