package gerador.atualizademandapalavrachave.passo;


import gerador.atualizademandapalavrachave.loopback.DaoAplicacao;
import gerador.atualizademandapalavrachave.loopback.DatasetAplicacao;
import gerador.atualizademandapalavrachave.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class AtualizaDemandaPalavraChaveObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ContaGoogle_ObtemContaDisponivel exec = new ContaGoogle_ObtemContaDisponivelImpl();
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

