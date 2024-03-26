package gerador.obtemimagemparaproduto.passo;


import gerador.obtemimagemparaproduto.loopback.DaoAplicacao;
import gerador.obtemimagemparaproduto.loopback.DatasetAplicacao;
import gerador.obtemimagemparaproduto.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class ObtemImagemParaProdutoObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ImagemConteudo_ListaPrincipalGeraJpg exec = new ImagemConteudo_ListaPrincipalGeraJpgImpl();
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

