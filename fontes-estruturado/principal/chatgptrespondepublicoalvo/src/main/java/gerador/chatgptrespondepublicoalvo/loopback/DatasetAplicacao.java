package gerador.chatgptrespondepublicoalvo.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ProdutoProprio produtoProprioCorrente;
	private PerguntaPublicoAlvo perguntaCorrente;
	private RespostaPublicoAlvo respostaCorrente;


	public void setProdutoProprioCorrente(ProdutoProprio valor) { 
		this.produtoProprioCorrente = valor;
	}
	public ProdutoProprio getProdutoProprioCorrente() { 
		return this.produtoProprioCorrente;
	}
	public void setPerguntaCorrente(PerguntaPublicoAlvo valor) { 
		this.perguntaCorrente = valor;
	}
	public PerguntaPublicoAlvo getPerguntaCorrente() { 
		return this.perguntaCorrente;
	}
	public void setRespostaCorrente(RespostaPublicoAlvo valor) { 
		this.respostaCorrente = valor;
	}
	public RespostaPublicoAlvo getRespostaCorrente() { 
		return this.respostaCorrente;
	}
}
