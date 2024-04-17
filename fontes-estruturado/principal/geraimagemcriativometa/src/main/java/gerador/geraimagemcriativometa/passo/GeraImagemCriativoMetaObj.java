package gerador.geraimagemcriativometa.passo;


import gerador.geraimagemcriativometa.loopback.DaoAplicacao;
import gerador.geraimagemcriativometa.loopback.DatasetAplicacao;
import gerador.geraimagemcriativometa.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class GeraImagemCriativoMetaObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		CriativoAnuncio_ListaParaGerarImagem exec = new CriativoAnuncio_ListaParaGerarImagemImpl();
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

