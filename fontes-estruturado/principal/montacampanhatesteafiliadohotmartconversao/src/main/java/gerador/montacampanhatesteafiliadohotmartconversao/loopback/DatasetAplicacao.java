package gerador.montacampanhatesteafiliadohotmartconversao.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private CampanhaAdsTeste campanhaTesteCorrente;
	private ContaGoogle conta;


	public void setCampanhaTesteCorrente(CampanhaAdsTeste valor) { 
		this.campanhaTesteCorrente = valor;
	}
	public CampanhaAdsTeste getCampanhaTesteCorrente() { 
		return this.campanhaTesteCorrente;
	}
	public void setConta(ContaGoogle valor) { 
		this.conta = valor;
	}
	public ContaGoogle getConta() { 
		return this.conta;
	}
}
