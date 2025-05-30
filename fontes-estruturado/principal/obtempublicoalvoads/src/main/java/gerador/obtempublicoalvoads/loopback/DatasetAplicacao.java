package gerador.obtempublicoalvoads.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ContaGoogle contaCorrente;
	private List<PublicoAlvoAdsDiario> listaPublico;
	private List<SegmentoMercadoAdsPersonalizado> listaPersonalizado;


	public void setContaCorrente(ContaGoogle valor) { 
		this.contaCorrente = valor;
	}
	public ContaGoogle getContaCorrente() { 
		return this.contaCorrente;
	}
	public void setListaPublico(List<PublicoAlvoAdsDiario> valor) { 
		this.listaPublico = valor;
	}
	public List<PublicoAlvoAdsDiario> getListaPublico() { 
		return this.listaPublico;
	}
	public void setListaPersonalizado(List<SegmentoMercadoAdsPersonalizado> valor) { 
		this.listaPersonalizado = valor;
	}
	public List<SegmentoMercadoAdsPersonalizado> getListaPersonalizado() { 
		return this.listaPersonalizado;
	}
}
