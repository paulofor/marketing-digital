package gerador.montaentregavel.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private EntregavelProduto entregavelCorrente;


	public void setEntregavelCorrente(EntregavelProduto valor) { 
		this.entregavelCorrente = valor;
	}
	public EntregavelProduto getEntregavelCorrente() { 
		return this.entregavelCorrente;
	}
}
