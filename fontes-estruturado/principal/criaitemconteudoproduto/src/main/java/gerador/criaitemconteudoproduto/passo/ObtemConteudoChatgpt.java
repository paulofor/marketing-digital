package gerador.criaitemconteudoproduto.passo;


import gerador.criaitemconteudoproduto.loopback.DaoAplicacao;
import gerador.criaitemconteudoproduto.loopback.DatasetAplicacao;
import gerador.criaitemconteudoproduto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ObtemConteudoChatgpt extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected List<ItemConteudoProduto>  saidaListaNovoConteudo;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPromptItemCorrente())) {
			ds.setListaNovoConteudo(saidaListaNovoConteudo);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new LoopItemImpl();
	}


	protected boolean executaCustom( PromptItem promptItemCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

