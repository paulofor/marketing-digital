package gerador.obtemhotlink.passo;


import gerador.obtemhotlink.loopback.DaoAplicacao;
import gerador.obtemhotlink.loopback.DatasetAplicacao;
import gerador.obtemhotlink.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ObtemHotlinkHotmart extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	// campos saida
	protected ProdutoAfiliadoHotmart  saidaProdutoCorrente;
	protected List<ProdutoAfiliadoHotlink>  saidaListaHotlink;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getProdutoCorrente(), ds.getToken())) {
			ds.setProdutoCorrente(saidaProdutoCorrente);
			ds.setListaHotlink(saidaListaHotlink);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new ProdutoAfiliadoHotlink_AtualizaProdutoHotlinkImpl();
	}


	protected boolean executaCustom( ProdutoAfiliadoHotmart produtoCorrente , TokenAcesso token ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

