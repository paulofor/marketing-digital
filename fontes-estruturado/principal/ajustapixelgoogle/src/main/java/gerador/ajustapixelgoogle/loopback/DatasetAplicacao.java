package gerador.ajustapixelgoogle.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private PixelGoogle pixelCorrente;


	public void setPixelCorrente(PixelGoogle valor) { 
		this.pixelCorrente = valor;
	}
	public PixelGoogle getPixelCorrente() { 
		return this.pixelCorrente;
	}
}
