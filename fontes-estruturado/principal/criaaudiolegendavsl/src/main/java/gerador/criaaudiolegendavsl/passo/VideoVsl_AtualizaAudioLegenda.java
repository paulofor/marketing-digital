package gerador.criaaudiolegendavsl.passo;


import gerador.criaaudiolegendavsl.loopback.DaoAplicacao;
import gerador.criaaudiolegendavsl.loopback.DatasetAplicacao;
import gerador.criaaudiolegendavsl.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class VideoVsl_AtualizaAudioLegenda extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	protected VideoVsl videoAudioLegenda;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getVideoCorrente())) {
			if (videoAudioLegenda==null) {
				throw new RuntimeException("videoAudioLegenda precisa ser atribuido em VideoVsl_AtualizaAudioLegendaImpl ");
			}
			repVideoVsl.atualizaAudioLegenda( videoAudioLegenda, new VoidCallback() { 
				public void onSuccess() {
					executaProximo();
				}
				public void onError(Throwable t) {
					onErrorBase(t);
				}
			});
		} else {
			executaProximo();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new DummyDaoBase();
	}


	protected boolean executaCustom( VideoVsl videoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

