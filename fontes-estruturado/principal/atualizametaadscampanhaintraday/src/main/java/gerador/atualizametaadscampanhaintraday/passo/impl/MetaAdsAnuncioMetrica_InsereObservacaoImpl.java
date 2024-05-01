package gerador.atualizametaadscampanhaintraday.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.MetaAdsAnuncioMetrica;
import gerador.atualizametaadscampanhaintraday.passo.*;



public class MetaAdsAnuncioMetrica_InsereObservacaoImpl extends MetaAdsAnuncioMetrica_InsereObservacao {

	@Override
	protected boolean executaCustom(List<MetaAdsAnuncioMetrica> listaAnuncio) {
		this.lista = listaAnuncio;
		return true;
	} 


}

