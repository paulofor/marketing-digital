package gerador.atualizademandapalavrachave.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.PalavraChaveEstatistica;
import br.com.gersis.loopback.modelo.PalavraChaveRaiz;
import gerador.atualizademandapalavrachave.passo.PalavraChaveEstatistica_InsereLista;



public class PalavraChaveEstatistica_InsereListaImpl extends PalavraChaveEstatistica_InsereLista {

	@Override
	protected boolean executaCustom(PalavraChaveRaiz palavraRaizCorrente,
			List<PalavraChaveEstatistica> listaPalavraEstatistica) {
		if (listaPalavraEstatistica.size()>0) {
			this.listaPalavra = listaPalavraEstatistica;
			this.palavraChaveRaizId = palavraRaizCorrente.getIdInteger();
			System.out.println(" *** Inserindo..." + palavraRaizCorrente.getPalavra());
			return true;
		} else {
			return false;
		}
	} 


}

