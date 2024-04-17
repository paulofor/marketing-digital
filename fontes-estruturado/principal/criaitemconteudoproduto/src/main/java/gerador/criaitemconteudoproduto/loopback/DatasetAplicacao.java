package gerador.criaitemconteudoproduto.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private PromptItem promptItemCorrente;
	private List<ItemConteudoProduto> listaNovoConteudo;


	public void setPromptItemCorrente(PromptItem valor) { 
		this.promptItemCorrente = valor;
	}
	public PromptItem getPromptItemCorrente() { 
		return this.promptItemCorrente;
	}
	public void setListaNovoConteudo(List<ItemConteudoProduto> valor) { 
		this.listaNovoConteudo = valor;
	}
	public List<ItemConteudoProduto> getListaNovoConteudo() { 
		return this.listaNovoConteudo;
	}
}
