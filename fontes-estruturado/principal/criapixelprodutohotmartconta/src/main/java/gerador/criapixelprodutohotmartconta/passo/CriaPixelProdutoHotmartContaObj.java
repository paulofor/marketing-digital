package gerador.criapixelprodutohotmartconta.passo;


import gerador.criapixelprodutohotmartconta.loopback.DaoAplicacao;
import gerador.criapixelprodutohotmartconta.loopback.DatasetAplicacao;
import gerador.criapixelprodutohotmartconta.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaPixelProdutoHotmartContaObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ContaGoogle_ListaCompleta exec = new ContaGoogle_ListaCompletaImpl();
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

