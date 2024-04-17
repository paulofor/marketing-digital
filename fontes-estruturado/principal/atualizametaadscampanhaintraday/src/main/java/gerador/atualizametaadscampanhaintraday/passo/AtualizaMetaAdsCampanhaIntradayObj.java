package gerador.atualizametaadscampanhaintraday.passo;


import gerador.atualizametaadscampanhaintraday.loopback.DaoAplicacao;
import gerador.atualizametaadscampanhaintraday.loopback.DatasetAplicacao;
import gerador.atualizametaadscampanhaintraday.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class AtualizaMetaAdsCampanhaIntradayObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ContaFacebook_ObtemContaAnuncio exec = new ContaFacebook_ObtemContaAnuncioImpl();
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

