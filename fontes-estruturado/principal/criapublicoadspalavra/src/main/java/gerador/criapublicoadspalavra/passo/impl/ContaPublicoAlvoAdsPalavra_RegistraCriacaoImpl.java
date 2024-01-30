package gerador.criapublicoadspalavra.passo.impl;


import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import br.com.gersis.loopback.modelo.ContaPublicoAlvoAdsPalavra;
import gerador.criapublicoadspalavra.passo.*;



public class ContaPublicoAlvoAdsPalavra_RegistraCriacaoImpl extends ContaPublicoAlvoAdsPalavra_RegistraCriacao {

	@Override
	protected boolean executaCustom(ContaPublicoAlvoAdsPalavra contaPublicoCorrente) {
		/*
		try {
			this.resourceName =  URLEncoder.encode(contaPublicoCorrente.getResourceName(), "UTF-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		*/
		this.resourceName = contaPublicoCorrente.getResourceName();
		this.idConta = contaPublicoCorrente.getContaGoogleId();
		this.idPublico = contaPublicoCorrente.getPublicoAlvoAdsPalavraId();
		return true;
	} 


}

