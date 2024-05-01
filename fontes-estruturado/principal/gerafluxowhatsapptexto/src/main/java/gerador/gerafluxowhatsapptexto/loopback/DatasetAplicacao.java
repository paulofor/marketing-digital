package gerador.gerafluxowhatsapptexto.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private WhatsappGrupoPadraoMensagem grupoPadraoCorrente;
	private List<ConteudoProdutoKiwify> listaConteudo;
	private List<WhatsappMensagemTexto> listaMensagemTexto;
	private WhatsappMensagemTexto textoCorrente;


	public void setGrupoPadraoCorrente(WhatsappGrupoPadraoMensagem valor) { 
		this.grupoPadraoCorrente = valor;
	}
	public WhatsappGrupoPadraoMensagem getGrupoPadraoCorrente() { 
		return this.grupoPadraoCorrente;
	}
	public void setListaConteudo(List<ConteudoProdutoKiwify> valor) { 
		this.listaConteudo = valor;
	}
	public List<ConteudoProdutoKiwify> getListaConteudo() { 
		return this.listaConteudo;
	}
	public void setListaMensagemTexto(List<WhatsappMensagemTexto> valor) { 
		this.listaMensagemTexto = valor;
	}
	public List<WhatsappMensagemTexto> getListaMensagemTexto() { 
		return this.listaMensagemTexto;
	}
	public void setTextoCorrente(WhatsappMensagemTexto valor) { 
		this.textoCorrente = valor;
	}
	public WhatsappMensagemTexto getTextoCorrente() { 
		return this.textoCorrente;
	}
}
