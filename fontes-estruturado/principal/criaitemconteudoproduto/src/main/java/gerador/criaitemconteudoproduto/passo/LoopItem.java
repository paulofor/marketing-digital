package gerador.criaitemconteudoproduto.passo;


import gerador.criaitemconteudoproduto.loopback.DaoAplicacao;
import gerador.criaitemconteudoproduto.loopback.DatasetAplicacao;
import gerador.criaitemconteudoproduto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class LoopItem extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	// campos saida
	protected ItemConteudoProduto  saidaConteudoCorrente;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaNovoConteudo())) {
			ds.setConteudoCorrente(saidaConteudoCorrente);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new ItemConteudoProduto_CriaConteudoUnicoImpl();
	}


	protected boolean executaCustom( List<ItemConteudoProduto> listaNovoConteudo ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

