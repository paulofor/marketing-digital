package gerador.chatgptgerahtmlcapitulodetalhe.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.EntregavelCapituloDetalhe;
import gerador.chatgptgerahtmlcapitulodetalhe.loopback.DatasetAplicacao;
import gerador.chatgptgerahtmlcapitulodetalhe.passo.GiraDetalhe;



public class GiraDetalheImpl extends GiraDetalhe {

	@Override
	protected boolean executaCustom(List<EntregavelCapituloDetalhe> listaDetalhe) {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		for (EntregavelCapituloDetalhe detalhe : listaDetalhe) {
			ds.setItemAltera(detalhe);
			//System.out.println("Capitulo: " + detalhe.getEntregavelCapitulo().getNome());
			this.executaProximoSemFinalizar();
		}
		this.finalizar();
		return false;
	} 


}

