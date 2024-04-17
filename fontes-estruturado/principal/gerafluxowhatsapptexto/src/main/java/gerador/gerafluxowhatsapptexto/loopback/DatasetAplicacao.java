package gerador.gerafluxowhatsapptexto.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private WhatsappGrupoPadraoMensagem grupoPadraoCorrente;
	private List<ConteudoProdutoKiwify> listaConteudoCompleto;
	private List<WhatsappMensagemTexto> listaMensagemTexto;


	public void setGrupoPadraoCorrente(WhatsappGrupoPadraoMensagem valor) { 
		this.grupoPadraoCorrente = valor;
	}
	public WhatsappGrupoPadraoMensagem getGrupoPadraoCorrente() { 
		return this.grupoPadraoCorrente;
	}
	public void setListaConteudoCompleto(List<ConteudoProdutoKiwify> valor) { 
		this.listaConteudoCompleto = valor;
	}
	public List<ConteudoProdutoKiwify> getListaConteudoCompleto() { 
		return this.listaConteudoCompleto;
	}
	public void setListaMensagemTexto(List<WhatsappMensagemTexto> valor) { 
		this.listaMensagemTexto = valor;
	}
	public List<WhatsappMensagemTexto> getListaMensagemTexto() { 
		return this.listaMensagemTexto;
	}
}
