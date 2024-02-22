package gerador.geraaudiovideo.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.TrechoVsl;
import gerador.geraaudiovideo.passo.*;



public class TrechoVsl_AtualizaListaAudioGeradoImpl extends TrechoVsl_AtualizaListaAudioGerado {

	
	
	@Override
	protected boolean executaCustom(List<TrechoVsl> listaTrecho) {
		this.listaTrecho = listaTrecho;
		return true;
	} 


}

