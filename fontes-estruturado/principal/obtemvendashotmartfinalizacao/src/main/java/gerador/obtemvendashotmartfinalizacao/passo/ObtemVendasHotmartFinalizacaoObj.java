package gerador.obtemvendashotmartfinalizacao.passo;


import gerador.obtemvendashotmartfinalizacao.loopback.DaoAplicacao;
import gerador.obtemvendashotmartfinalizacao.loopback.DatasetAplicacao;
import gerador.obtemvendashotmartfinalizacao.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class ObtemVendasHotmartFinalizacaoObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ProdutoAfiliadoHotmart_AtualizaTemperaturaAtual exec = new ProdutoAfiliadoHotmart_AtualizaTemperaturaAtualImpl();
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

