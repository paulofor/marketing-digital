package gerador.obtempublicoalvoads.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.ContaGoogle;
import br.com.gersis.loopback.modelo.PublicoAlvoAdsDiario;
import gerador.obtempublicoalvoads.passo.*;



public class PublicoAlvoAdsDiario_AtualizaListaPorContaImpl extends PublicoAlvoAdsDiario_AtualizaListaPorConta {

	@Override
	protected boolean executaCustom(ContaGoogle contaCorrente, List<PublicoAlvoAdsDiario> listaPublico) {
		this.listaPublicoAlvo = listaPublico;
		if (this.listaPublicoAlvo.size()>0) return true;
		else return false;
	} 


}

