package gerador.finalizadadosdia.passo;


import gerador.finalizadadosdia.loopback.DaoAplicacao;
import gerador.finalizadadosdia.loopback.DatasetAplicacao;
import gerador.finalizadadosdia.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class FinalizaDadosDiaObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		WhatsappGrupo_FinalizaDadosDia exec = new WhatsappGrupo_FinalizaDadosDiaImpl();
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

