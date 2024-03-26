package gerador.geraimagemconteudoproduto.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ConteudoProdutoKiwify conteudoCorrente;
	private ImagemConteudo imagemNova;


	public void setConteudoCorrente(ConteudoProdutoKiwify valor) { 
		this.conteudoCorrente = valor;
	}
	public ConteudoProdutoKiwify getConteudoCorrente() { 
		return this.conteudoCorrente;
	}
	public void setImagemNova(ImagemConteudo valor) { 
		this.imagemNova = valor;
	}
	public ImagemConteudo getImagemNova() { 
		return this.imagemNova;
	}
}
