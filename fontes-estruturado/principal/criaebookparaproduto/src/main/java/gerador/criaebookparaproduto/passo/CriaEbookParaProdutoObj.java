package gerador.criaebookparaproduto.passo;


import gerador.criaebookparaproduto.loopback.DaoAplicacao;
import gerador.criaebookparaproduto.loopback.DatasetAplicacao;
import gerador.criaebookparaproduto.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaEbookParaProdutoObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ProdutoProprio_obtemParaGeracao exec = new ProdutoProprio_obtemParaGeracaoImpl();
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

