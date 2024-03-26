package gerador.geraimagemconteudoproduto.passo;


import gerador.geraimagemconteudoproduto.loopback.DaoAplicacao;
import gerador.geraimagemconteudoproduto.loopback.DatasetAplicacao;
import gerador.geraimagemconteudoproduto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ImportaImagem extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	// campos saida
	protected ImagemConteudo  saidaImagemNova;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getConteudoCorrente(), ds.getImagemNova())) {
			ds.setImagemNova(saidaImagemNova);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new ImagemConteudo_RegistraImagemImpl();
	}


	protected boolean executaCustom( ConteudoProdutoKiwify conteudoCorrente , ImagemConteudo imagemNova ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

