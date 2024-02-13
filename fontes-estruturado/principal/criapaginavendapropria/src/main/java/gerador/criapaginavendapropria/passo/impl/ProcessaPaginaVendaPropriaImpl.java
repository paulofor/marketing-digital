package gerador.criapaginavendapropria.passo.impl;


import java.security.SecureRandom;
import java.util.ArrayList;

import br.com.gersis.loopback.modelo.ArquivoPaginaVenda;
import br.com.gersis.loopback.modelo.PaginaVendaPropria;
import br.com.gersis.loopback.modelo.VersaoPaginaVenda;
import gerador.criapaginavendapropria.passo.ProcessaPaginaVendaPropria;



public class ProcessaPaginaVendaPropriaImpl extends ProcessaPaginaVendaPropria {

	
	SecureRandom random = new SecureRandom();
	
	

	@Override
	protected boolean executaCustom(VersaoPaginaVenda versaoPaginaVendaCorrente) {
		this.saidaListaPaginaVendaPropria = new ArrayList<PaginaVendaPropria>();
		for (ArquivoPaginaVenda arquivo : versaoPaginaVendaCorrente.getArquivoPaginaVendas()) {
			PaginaVendaPropria novo = new PaginaVendaPropria();
			novo.setHotmartId(versaoPaginaVendaCorrente.getHotmartId());
			novo.setVersaoPaginaVendaId(versaoPaginaVendaCorrente.getIdInteger());
			novo.setImagemPaginaVendaId(arquivo.getImagemPaginaVendaId());
			novo.setCodigoUrl(generateRandomHex());
			novo.setTipoGeracao("JAVA");
			String url = versaoPaginaVendaCorrente.getProdutoAfiliadoHotmart().getUrlRaizPaginaVendaPropria();
			url += "/" + novo.getCodigoUrl();
			novo.setUrlCompleta(url);
			this.saidaListaPaginaVendaPropria.add(novo);
		}
		return true;
		
	}



	private String generateRandomHex() {
		// Crie um array de bytes e gera números aleatórios
		byte[] bytes = new byte[15]; // 15 bytes * 2 (um byte representa dois caracteres hexadecimais) = 30
										// caracteres hexadecimais
		random.nextBytes(bytes);

		// converte bytes para hexadecimal
		StringBuilder sb = new StringBuilder();
		for (byte b : bytes) {
			sb.append(String.format("%02x", b));
		}

		return sb.toString();
	}
}

