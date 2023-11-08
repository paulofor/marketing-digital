package gerador.montacampanhatesteafiliadohotmartconversao.passo.impl;


import br.com.gersis.loopback.modelo.CampanhaAdsTeste;
import gerador.montacampanhatesteafiliadohotmartconversao.passo.*;



public class CampanhaAdsTeste_AtualizaCampanhaCriadaImpl extends CampanhaAdsTeste_AtualizaCampanhaCriada { 

	@Override
	protected boolean executaCustom(CampanhaAdsTeste CampanhaTesteCorrente) {
		this.campanha = CampanhaTesteCorrente;
		return true;
	} 

}

