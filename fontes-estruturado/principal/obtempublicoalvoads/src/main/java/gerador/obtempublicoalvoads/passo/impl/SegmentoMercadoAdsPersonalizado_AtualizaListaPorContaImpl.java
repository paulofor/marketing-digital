package gerador.obtempublicoalvoads.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.SegmentoMercadoAdsPersonalizado;
import gerador.obtempublicoalvoads.passo.*;



public class SegmentoMercadoAdsPersonalizado_AtualizaListaPorContaImpl extends SegmentoMercadoAdsPersonalizado_AtualizaListaPorConta {

	@Override
	protected boolean executaCustom(List<SegmentoMercadoAdsPersonalizado> listaPersonalizado) {
		if (listaPersonalizado==null || listaPersonalizado.size()==0) {
			return false;
		} else {
			this.listaItem = listaPersonalizado;
			return true;
		}
	} 


	
}

