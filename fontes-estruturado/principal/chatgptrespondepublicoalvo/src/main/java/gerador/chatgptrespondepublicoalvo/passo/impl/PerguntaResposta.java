package gerador.chatgptrespondepublicoalvo.passo.impl;

import br.com.gersis.loopback.modelo.PerguntaPublicoAlvo;
import br.com.gersis.loopback.modelo.RespostaPublicoAlvo;

public class PerguntaResposta {

	private PerguntaPublicoAlvo pergunta;
	private RespostaPublicoAlvo resposta;
	
	public PerguntaResposta(PerguntaPublicoAlvo pergunta, RespostaPublicoAlvo resposta) {
		this.pergunta = pergunta;
		this.resposta = resposta;
	}
	
	public PerguntaPublicoAlvo getPergunta() {
		return pergunta;
	}
	public void setPergunta(PerguntaPublicoAlvo pergunta) {
		this.pergunta = pergunta;
	}
	public RespostaPublicoAlvo getResposta() {
		return resposta;
	}
	public void setResposta(RespostaPublicoAlvo resposta) {
		this.resposta = resposta;
	}
	
	
}
