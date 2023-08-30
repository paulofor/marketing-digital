package gerador.criapixelmetagoogle.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ProdutoAfiliadoHotmart produtoAfiliadoCorrente;
	private PixelGoogle pixelGoogle;


	public void setProdutoAfiliadoCorrente(ProdutoAfiliadoHotmart valor) { 
		this.produtoAfiliadoCorrente = valor;
	}
	public ProdutoAfiliadoHotmart getProdutoAfiliadoCorrente() { 
		return this.produtoAfiliadoCorrente;
	}
	public void setPixelGoogle(PixelGoogle valor) { 
		this.pixelGoogle = valor;
	}
	public PixelGoogle getPixelGoogle() { 
		return this.pixelGoogle;
	}
}
