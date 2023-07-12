package gerador.montacampanhatesteafiliadohotmart.passo.impl;


import br.com.gersis.loopback.modelo.CampanhaAdsTeste;
import gerador.montacampanhatesteafiliadohotmart.passo.*;



public class CampanhaAdsTeste_AtualizaCampanhaCriadaImpl extends CampanhaAdsTeste_AtualizaCampanhaCriada {

	@Override
	protected void executaCustom(CampanhaAdsTeste CampanhaTesteCorrente) {
		this.campanha = CampanhaTesteCorrente;
	} 

	

}

