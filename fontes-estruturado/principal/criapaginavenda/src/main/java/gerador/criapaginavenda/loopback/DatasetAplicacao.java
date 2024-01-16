package gerador.criapaginavenda.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private VersaoPaginaVenda versaoCorrente;
	private VersaoPaginaVenda versaoCorrenteCompleta;


	public void setVersaoCorrente(VersaoPaginaVenda valor) { 
		this.versaoCorrente = valor;
	}
	public VersaoPaginaVenda getVersaoCorrente() { 
		return this.versaoCorrente;
	}
	public void setVersaoCorrenteCompleta(VersaoPaginaVenda valor) { 
		this.versaoCorrenteCompleta = valor;
	}
	public VersaoPaginaVenda getVersaoCorrenteCompleta() { 
		return this.versaoCorrenteCompleta;
	}
}
