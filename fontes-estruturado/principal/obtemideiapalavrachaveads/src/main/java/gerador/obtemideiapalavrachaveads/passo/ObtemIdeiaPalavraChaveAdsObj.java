package gerador.obtemideiapalavrachaveads.passo;


import gerador.obtemideiapalavrachaveads.loopback.DaoAplicacao;
import gerador.obtemideiapalavrachaveads.loopback.DatasetAplicacao;
import gerador.obtemideiapalavrachaveads.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class ObtemIdeiaPalavraChaveAdsObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		VisitaProdutoHotmart_ListaParaPesquisaPalavraChave exec = new VisitaProdutoHotmart_ListaParaPesquisaPalavraChaveImpl();
		exec.setComum(ds);
		exec.executa();
		executaFinalizacao(ds);
		finalizar();
	}
	private void executaFinalizacao(DatasetAplicacao ds) {
		DaoBase finalizacao1 = new IdeiaPalavraChave_AtualizaMaisRecentePalavraChaveImpl();
		finalizacao1.setComum(ds);
		finalizacao1.executa();
	}
	public int getNumPasso() {
		return 1;
	}
}

