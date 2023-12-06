package gerador.atualizaafiliados.passo;


import gerador.atualizaafiliados.loopback.DaoAplicacao;
import gerador.atualizaafiliados.loopback.DatasetAplicacao;
import gerador.atualizaafiliados.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class AtualizaAfiliadosObj extends DaoAplicacao { 

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

