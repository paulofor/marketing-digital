package gerador.ajustapixelgoogle.passo;


import gerador.ajustapixelgoogle.loopback.DaoAplicacao;
import gerador.ajustapixelgoogle.loopback.DatasetAplicacao;
import gerador.ajustapixelgoogle.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class AjustaPixelGoogleObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		PixelGoogle_ListaParaAjusteComConta exec = new PixelGoogle_ListaParaAjusteComContaImpl();
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

