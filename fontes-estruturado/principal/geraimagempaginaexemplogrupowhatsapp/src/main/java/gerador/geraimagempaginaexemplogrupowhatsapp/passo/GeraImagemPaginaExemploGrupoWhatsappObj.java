package gerador.geraimagempaginaexemplogrupowhatsapp.passo;


import gerador.geraimagempaginaexemplogrupowhatsapp.loopback.DaoAplicacao;
import gerador.geraimagempaginaexemplogrupowhatsapp.loopback.DatasetAplicacao;
import gerador.geraimagempaginaexemplogrupowhatsapp.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class GeraImagemPaginaExemploGrupoWhatsappObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		PaginaWhatsappExemplo_ListaParaColetarImagem exec = new PaginaWhatsappExemplo_ListaParaColetarImagemImpl();
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

