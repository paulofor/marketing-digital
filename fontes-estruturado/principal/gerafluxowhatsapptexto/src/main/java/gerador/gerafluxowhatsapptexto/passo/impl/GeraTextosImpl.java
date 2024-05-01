package gerador.gerafluxowhatsapptexto.passo.impl;


import java.util.ArrayList;
import java.util.List;

import br.com.gersis.loopback.modelo.ConteudoProdutoKiwify;
import br.com.gersis.loopback.modelo.ItemConteudoProduto;
import br.com.gersis.loopback.modelo.WhatsappGrupoDiaAgenda;
import br.com.gersis.loopback.modelo.WhatsappGrupoPadraoMensagem;
import br.com.gersis.loopback.modelo.WhatsappMensagemTexto;
import br.com.gersis.loopback.modelo.WhatsappModeloMensagem;
import gerador.gerafluxowhatsapptexto.passo.GeraTextos;



public class GeraTextosImpl extends GeraTextos {

	int diaNum = 0;
	
	
	@Override
	protected boolean executaCustom(WhatsappGrupoPadraoMensagem grupoPadraoCorrente,
			List<ConteudoProdutoKiwify> listaConteudo) {
		
		List<WhatsappMensagemTexto> listaMensagem = new ArrayList<WhatsappMensagemTexto>();
		
		try {

			for (ConteudoProdutoKiwify conteudo : listaConteudo) {
				trataConteudo(conteudo,listaMensagem,grupoPadraoCorrente);
			}
			this.saidaListaMensagemTexto = listaMensagem;
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	private void trataConteudo(ConteudoProdutoKiwify conteudo, List<WhatsappMensagemTexto> listaMensagem,
			WhatsappGrupoPadraoMensagem grupoPadraoCorrente) {
		
		for (WhatsappGrupoDiaAgenda dia : grupoPadraoCorrente.getWhatsappGrupoDiaAgendas()) {
			int indice = 0;
			diaNum++;
			System.out.println("Dia " + dia.getDia() + " Conteudo: " + conteudo.getNome() + " Dia: " + diaNum);
			for (WhatsappModeloMensagem modeloMensagem : dia.getWhatsappModeloMensagems()) {
				WhatsappMensagemTexto texto = new WhatsappMensagemTexto();
				indice++;
				String textoAjustado = ajustaTexto(conteudo,modeloMensagem.getTexto());

				texto.setTexto(textoAjustado);
				texto.setWhatsappModeloMensagemId(modeloMensagem.getIdInteger());
				texto.setIndiceDia(indice);
				texto.setNumeroDia(diaNum);
				texto.setWhatsappGrupoPadraoMensagemId(grupoPadraoCorrente.getIdInteger());
				listaMensagem.add(texto);
			}
		}
		
	}

	private String ajustaTexto(ConteudoProdutoKiwify conteudo, String texto) {
		String saida = texto;
		saida = saida.replace("---nome---", conteudo.getNome());
		for (ItemConteudoProduto item : conteudo.getItemConteudoProdutos()) {
			saida = saida.replace("---" + item.getPromptItem().getCodigoReplace() + "---", item.getTexto());
		}
		return saida;
		
	} 
	


}

