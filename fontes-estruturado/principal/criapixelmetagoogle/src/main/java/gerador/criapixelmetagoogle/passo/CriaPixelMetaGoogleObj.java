package gerador.criapixelmetagoogle.passo;


import gerador.criapixelmetagoogle.loopback.DaoAplicacao;
import gerador.criapixelmetagoogle.loopback.DatasetAplicacao;
import gerador.criapixelmetagoogle.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaPixelMetaGoogleObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ProdutoAfiliadoHotmart_ListaCriarPixelGoogle exec = new ProdutoAfiliadoHotmart_ListaCriarPixelGoogleImpl();
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

