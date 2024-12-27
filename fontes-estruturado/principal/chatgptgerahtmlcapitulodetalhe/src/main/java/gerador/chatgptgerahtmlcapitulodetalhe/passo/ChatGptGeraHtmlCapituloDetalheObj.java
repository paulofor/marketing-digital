package gerador.chatgptgerahtmlcapitulodetalhe.passo;


import gerador.chatgptgerahtmlcapitulodetalhe.loopback.DaoAplicacao;
import gerador.chatgptgerahtmlcapitulodetalhe.loopback.DatasetAplicacao;
import gerador.chatgptgerahtmlcapitulodetalhe.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class ChatGptGeraHtmlCapituloDetalheObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		EntregavelProduto_ListaComDetalhe exec = new EntregavelProduto_ListaComDetalheImpl();
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

