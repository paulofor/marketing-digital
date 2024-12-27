package gerador.chatgptrespondepublicoalvo.passo.impl;

import java.util.ArrayList;
import java.util.List;

import br.com.gersis.loopback.modelo.PerguntaPublicoAlvo;
import br.com.gersis.loopback.modelo.RespostaPublicoAlvo;

public class ProcessadorChatGpt {

	private static List<PerguntaResposta> lista = new ArrayList<PerguntaResposta>();
	private static String mensagemInicial = null;
	
	public static boolean inicial() {
		return mensagemInicial == null;
	}
	
	public static void setMensagemInicial(String inicial) {
		mensagemInicial = inicial;
	}
	public static String getMensagemInicial() {
		return mensagemInicial;
	}
	
	public static void add(PerguntaPublicoAlvo pergunta, RespostaPublicoAlvo resposta) {
		lista.add(new PerguntaResposta(pergunta,resposta));
	}
	
	public static List<PerguntaResposta> lista() {
		return lista;
	}
}
