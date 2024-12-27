package gerador.chatgptgeraentregavelcapitulo.passo;


import gerador.chatgptgeraentregavelcapitulo.loopback.DaoAplicacao;
import gerador.chatgptgeraentregavelcapitulo.loopback.DatasetAplicacao;
import gerador.chatgptgeraentregavelcapitulo.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class ChatGptGeraEntregavelCapituloObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		EntregavelProduto_ListaComProdutoMercado exec = new EntregavelProduto_ListaComProdutoMercadoImpl();
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

