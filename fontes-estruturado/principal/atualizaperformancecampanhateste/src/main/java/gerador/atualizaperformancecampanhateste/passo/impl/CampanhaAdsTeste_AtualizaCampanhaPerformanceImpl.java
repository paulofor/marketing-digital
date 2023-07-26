package gerador.atualizaperformancecampanhateste.passo.impl;


import br.com.gersis.loopback.modelo.CampanhaAdsTeste;
import gerador.atualizaperformancecampanhateste.passo.*;



public class CampanhaAdsTeste_AtualizaCampanhaPerformanceImpl extends CampanhaAdsTeste_AtualizaCampanhaPerformance {

	@Override
	protected boolean executaCustom(CampanhaAdsTeste campanhaTesteCorrente) {
		this.campanha = campanhaTesteCorrente;
		return true;
	} 


}

