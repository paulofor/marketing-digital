package gerador.chatgptgeraentregavelcapitulodetalhe.passo;


import gerador.chatgptgeraentregavelcapitulodetalhe.loopback.DaoAplicacao;
import gerador.chatgptgeraentregavelcapitulodetalhe.loopback.DatasetAplicacao;
import gerador.chatgptgeraentregavelcapitulodetalhe.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class ChatGptGeraEntregavelCapituloDetalheObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		EntregavelProduto_ListaGeraDetalhe exec = new EntregavelProduto_ListaGeraDetalheImpl();
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

