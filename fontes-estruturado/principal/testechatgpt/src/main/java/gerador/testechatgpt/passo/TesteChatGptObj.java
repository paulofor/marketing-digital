package gerador.testechatgpt.passo;


import gerador.testechatgpt.loopback.DaoAplicacao;
import gerador.testechatgpt.loopback.DatasetAplicacao;
import gerador.testechatgpt.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class TesteChatGptObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ExecutaTeste exec = new ExecutaTesteImpl();
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

