package gerador.obtemimagempaginavendamodelada.passo;


import gerador.obtemimagempaginavendamodelada.loopback.DaoAplicacao;
import gerador.obtemimagempaginavendamodelada.loopback.DatasetAplicacao;
import gerador.obtemimagempaginavendamodelada.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class ObtemImagemPaginaVendaModeladaObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		PaginaVendaModelada_ListaParaBuscarImagem exec = new PaginaVendaModelada_ListaParaBuscarImagemImpl();
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

