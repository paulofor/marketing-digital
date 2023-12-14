package gerador.obtemhotlink.passo;


import gerador.obtemhotlink.loopback.DaoAplicacao;
import gerador.obtemhotlink.loopback.DatasetAplicacao;
import gerador.obtemhotlink.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class ObtemHotlinkObj extends DaoAplicacao { 

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
	}
	public int getNumPasso() {
		return 1;
	}
}

