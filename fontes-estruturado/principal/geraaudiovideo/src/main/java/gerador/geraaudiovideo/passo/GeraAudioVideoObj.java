package gerador.geraaudiovideo.passo;


import gerador.geraaudiovideo.loopback.DaoAplicacao;
import gerador.geraaudiovideo.loopback.DatasetAplicacao;
import gerador.geraaudiovideo.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class GeraAudioVideoObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		VideoVsl_ListaGeraAudioComTrecho exec = new VideoVsl_ListaGeraAudioComTrechoImpl();
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

