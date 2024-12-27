package gerador.chatgptgeraentregavel.passo;


import gerador.chatgptgeraentregavel.loopback.DaoAplicacao;
import gerador.chatgptgeraentregavel.loopback.DatasetAplicacao;
import gerador.chatgptgeraentregavel.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class ChatGptGeraEntregavelObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ProdutoProprio_ObtemParaGeracaoEntregavel exec = new ProdutoProprio_ObtemParaGeracaoEntregavelImpl();
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

