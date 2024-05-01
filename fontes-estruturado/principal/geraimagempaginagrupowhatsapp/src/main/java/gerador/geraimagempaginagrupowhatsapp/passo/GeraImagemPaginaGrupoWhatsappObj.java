package gerador.geraimagempaginagrupowhatsapp.passo;


import gerador.geraimagempaginagrupowhatsapp.loopback.DaoAplicacao;
import gerador.geraimagempaginagrupowhatsapp.loopback.DatasetAplicacao;
import gerador.geraimagempaginagrupowhatsapp.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class GeraImagemPaginaGrupoWhatsappObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		PaginaWhatsappGrupo_ListaParaObterImagem exec = new PaginaWhatsappGrupo_ListaParaObterImagemImpl();
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

