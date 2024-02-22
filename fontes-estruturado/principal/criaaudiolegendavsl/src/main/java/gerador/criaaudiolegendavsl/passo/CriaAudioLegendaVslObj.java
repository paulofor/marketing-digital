package gerador.criaaudiolegendavsl.passo;


import gerador.criaaudiolegendavsl.loopback.DaoAplicacao;
import gerador.criaaudiolegendavsl.loopback.DatasetAplicacao;
import gerador.criaaudiolegendavsl.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaAudioLegendaVslObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		VideoVsl_ListaCriaAudioLegendaVsl exec = new VideoVsl_ListaCriaAudioLegendaVslImpl();
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

