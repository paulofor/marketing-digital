package gerador.atualizaafiliados.passo;


import gerador.atualizaafiliados.loopback.DaoAplicacao;
import gerador.atualizaafiliados.loopback.DatasetAplicacao;
import gerador.atualizaafiliados.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ObtemListaHotmartPendente extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	// campos saida
	protected List<ProdutoAfiliadoHotmartPendente>  saidaListaPendente;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getToken())) {
			ds.setListaPendente(saidaListaPendente);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new ProdutoAfiliadoHotmartPendente_AtualizaPendenteImpl();
	}


	protected boolean executaCustom( TokenAcesso token ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

