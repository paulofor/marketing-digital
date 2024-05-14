package gerador.criaitemconteudoproduto.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private PromptItem promptItemCorrente;
	private List<ItemConteudoProduto> listaNovoConteudo;
	private ItemConteudoProduto conteudoCorrente;


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
	public void setConteudoCorrente(ItemConteudoProduto valor) { 
		this.conteudoCorrente = valor;
	}
	public ItemConteudoProduto getConteudoCorrente() { 
		return this.conteudoCorrente;
	}
}
