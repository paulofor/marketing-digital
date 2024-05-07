package gerador.criaimagemcriativorededisplay.passo;


import gerador.criaimagemcriativorededisplay.loopback.DaoAplicacao;
import gerador.criaimagemcriativorededisplay.loopback.DatasetAplicacao;
import gerador.criaimagemcriativorededisplay.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaImagemCriativoRedeDisplayObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ImagemConjunto_ObtemListaParaGerarDeImagemVenda exec = new ImagemConjunto_ObtemListaParaGerarDeImagemVendaImpl();
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

