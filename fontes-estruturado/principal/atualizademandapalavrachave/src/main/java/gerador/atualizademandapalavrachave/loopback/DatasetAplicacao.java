package gerador.atualizademandapalavrachave.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private PalavraChaveRaiz palavraRaizCorrente;
	private List<PalavraChaveEstatistica> listaPalavraEstatistica;
	private ContaGoogle conta;


	public void setPalavraRaizCorrente(PalavraChaveRaiz valor) { 
		this.palavraRaizCorrente = valor;
	}
	public PalavraChaveRaiz getPalavraRaizCorrente() { 
		return this.palavraRaizCorrente;
	}
	public void setListaPalavraEstatistica(List<PalavraChaveEstatistica> valor) { 
		this.listaPalavraEstatistica = valor;
	}
	public List<PalavraChaveEstatistica> getListaPalavraEstatistica() { 
		return this.listaPalavraEstatistica;
	}
	public void setConta(ContaGoogle valor) { 
		this.conta = valor;
	}
	public ContaGoogle getConta() { 
		return this.conta;
	}
}
