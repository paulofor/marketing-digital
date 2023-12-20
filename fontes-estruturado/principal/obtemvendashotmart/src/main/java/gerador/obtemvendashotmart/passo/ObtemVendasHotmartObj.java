package gerador.obtemvendashotmart.passo;


import gerador.obtemvendashotmart.loopback.DaoAplicacao;
import gerador.obtemvendashotmart.loopback.DatasetAplicacao;
import gerador.obtemvendashotmart.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class ObtemVendasHotmartObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		TokenAcesso_ObtemPorNome exec = new TokenAcesso_ObtemPorNomeImpl();
		exec.setComum(ds);
		exec.executa();
		executaFinalizacao(ds);
		finalizar();
	}
	private void executaFinalizacao(DatasetAplicacao ds) {
		DaoBase finalizacao1 = new ProdutoAfiliadoHotmart_AtualizaTemperaturaAtualImpl();
		finalizacao1.setComum(ds);
		finalizacao1.executa();
		DaoBase finalizacao1 = new VisitaProdutoHotmart_AjustaDeltaTemperaturaImpl();
		finalizacao1.setComum(ds);
		finalizacao1.executa();
	}
	public int getNumPasso() {
		return 1;
	}
}

