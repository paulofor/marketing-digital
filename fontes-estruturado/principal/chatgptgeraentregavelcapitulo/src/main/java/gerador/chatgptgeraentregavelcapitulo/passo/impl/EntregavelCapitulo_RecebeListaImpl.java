package gerador.chatgptgeraentregavelcapitulo.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.EntregavelCapitulo;
import gerador.chatgptgeraentregavelcapitulo.passo.*;



public class EntregavelCapitulo_RecebeListaImpl extends EntregavelCapitulo_RecebeLista {

	@Override
	protected boolean executaCustom(List<EntregavelCapitulo> listaCapitulo) {
		this.listaCapitulo = listaCapitulo;
		return true;
	} 


	
}

