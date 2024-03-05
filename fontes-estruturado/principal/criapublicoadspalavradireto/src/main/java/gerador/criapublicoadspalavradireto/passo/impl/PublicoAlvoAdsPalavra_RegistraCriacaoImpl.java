package gerador.criapublicoadspalavradireto.passo.impl;


import br.com.gersis.loopback.modelo.PublicoAlvoAdsPalavra;
import gerador.criapublicoadspalavradireto.passo.*;



public class PublicoAlvoAdsPalavra_RegistraCriacaoImpl extends PublicoAlvoAdsPalavra_RegistraCriacao {

	@Override
	protected boolean executaCustom(PublicoAlvoAdsPalavra publicoCorrente) {
		this.resourceName = publicoCorrente.getResourceName();
		this.idPublico = publicoCorrente.getIdInteger();
		return true;
	} 


}

