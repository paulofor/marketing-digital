package gerador.obtempublicoalvoads.passo;


import gerador.obtempublicoalvoads.loopback.DaoAplicacao;
import gerador.obtempublicoalvoads.loopback.DatasetAplicacao;
import gerador.obtempublicoalvoads.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class ObtemPublicoAlvoAdsObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ContaGoogle_ListaAtivaRemarketing exec = new ContaGoogle_ListaAtivaRemarketingImpl();
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

