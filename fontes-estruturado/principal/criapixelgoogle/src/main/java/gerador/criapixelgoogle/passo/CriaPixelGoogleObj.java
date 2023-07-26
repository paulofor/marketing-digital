package gerador.criapixelgoogle.passo;


import gerador.criapixelgoogle.loopback.DaoAplicacao;
import gerador.criapixelgoogle.loopback.DatasetAplicacao;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaPixelGoogleObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ProdutoAfiliadoHotmart_ListaCriarPixelGoogle exec = new ProdutoAfiliadoHotmart_ListaCriarPixelGoogle();
		exec.setComum(ds);
		exec.executa();
		finalizar();
	}
	public int getNumPasso() {
		return 1;
	}
}

