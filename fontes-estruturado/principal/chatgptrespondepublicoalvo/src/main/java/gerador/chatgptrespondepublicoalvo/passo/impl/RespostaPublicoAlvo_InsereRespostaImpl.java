package gerador.chatgptrespondepublicoalvo.passo.impl;


import br.com.gersis.loopback.modelo.RespostaPublicoAlvo;
import gerador.chatgptrespondepublicoalvo.passo.RespostaPublicoAlvo_InsereResposta;



public class RespostaPublicoAlvo_InsereRespostaImpl extends RespostaPublicoAlvo_InsereResposta {

	@Override
	protected boolean executaCustom(RespostaPublicoAlvo respostaCorrente) {
		this.resposta = respostaCorrente;
		return true;
	} 


}

