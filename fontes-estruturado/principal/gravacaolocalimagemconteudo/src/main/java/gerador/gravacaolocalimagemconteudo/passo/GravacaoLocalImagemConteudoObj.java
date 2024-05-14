package gerador.gravacaolocalimagemconteudo.passo;


import gerador.gravacaolocalimagemconteudo.loopback.DaoAplicacao;
import gerador.gravacaolocalimagemconteudo.loopback.DatasetAplicacao;
import gerador.gravacaolocalimagemconteudo.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class GravacaoLocalImagemConteudoObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		EntregavelProduto_ListaParaGerarImagemConteudo exec = new EntregavelProduto_ListaParaGerarImagemConteudoImpl();
		exec.setComum(ds);
		exec.executa();
		executaFinalizacao(ds);
		finalizar();
	}
	private void executaFinalizacao(DatasetAplicacao ds) {
	}
	public int getNumPasso() {
		return 1;
	}
}

