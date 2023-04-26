package validador.marketingdigital.integracao.daobase.comum;

import java.util.HashMap;
import java.util.Map;

import validador.marketingdigital.integracao.daobase.DaoBase;
import validador.marketingdigital.integracao.daobase.IDatasetComum;

public abstract class DaoBasePaginacao extends DaoBaseComum{

	protected abstract int getTotalPagina();
	protected abstract void setPaginaCorrente(int pagina);
	
	public void executa() {
		System.out.println("Executando " + this.getClass().getName());
		
		int totalPagina = getTotalPagina();
		for (int pag=1;pag<=totalPagina;pag++) {
			this.setPaginaCorrente(pag);
			this.concluido = false;
			executaImpl();
			while (!this.concluido) {
				try {
					
					Thread.sleep(getTempo());
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
				//System.out.println("executando " + this.toString());
			}
		}
		
	}
	
}
