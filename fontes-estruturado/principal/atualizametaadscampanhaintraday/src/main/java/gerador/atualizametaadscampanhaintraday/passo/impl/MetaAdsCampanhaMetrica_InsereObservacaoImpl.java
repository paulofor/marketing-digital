package gerador.atualizametaadscampanhaintraday.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.MetaAdsCampanhaMetrica;
import gerador.atualizametaadscampanhaintraday.passo.*;



public class MetaAdsCampanhaMetrica_InsereObservacaoImpl extends MetaAdsCampanhaMetrica_InsereObservacao {

	@Override
	protected boolean executaCustom(List<MetaAdsCampanhaMetrica> listaCampanhaMetrica) {
		this.listaObservacao = listaCampanhaMetrica;
		return true;
	} 


}

