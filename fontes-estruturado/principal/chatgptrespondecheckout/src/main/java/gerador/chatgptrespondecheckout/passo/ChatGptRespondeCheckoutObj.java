package gerador.chatgptrespondecheckout.passo;


import gerador.chatgptrespondecheckout.loopback.DaoAplicacao;
import gerador.chatgptrespondecheckout.loopback.DatasetAplicacao;
import gerador.chatgptrespondecheckout.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class ChatGptRespondeCheckoutObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ProdutoProprio_ObtemParaCriacaoPaginaCheckout exec = new ProdutoProprio_ObtemParaCriacaoPaginaCheckoutImpl();
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

