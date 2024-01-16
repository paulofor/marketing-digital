package gerador.planejadorpalavragoogleads.passo;


import gerador.planejadorpalavragoogleads.loopback.DaoAplicacao;
import gerador.planejadorpalavragoogleads.loopback.DatasetAplicacao;
import gerador.planejadorpalavragoogleads.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class PlanejadorPalavraGoogleAdsObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		Dummy exec = new DummyImpl();
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

