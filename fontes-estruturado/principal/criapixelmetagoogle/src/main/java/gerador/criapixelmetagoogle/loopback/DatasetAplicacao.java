package gerador.criapixelmetagoogle.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ProdutoAfiliadoHotmart produtoAfiliadoCorrente;
	private PixelGoogle pixelGoogle;
	private PixelGoogle pixelGooglePaginaVenda;


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
	public void setPixelGooglePaginaVenda(PixelGoogle valor) { 
		this.pixelGooglePaginaVenda = valor;
	}
	public PixelGoogle getPixelGooglePaginaVenda() { 
		return this.pixelGooglePaginaVenda;
	}
}
