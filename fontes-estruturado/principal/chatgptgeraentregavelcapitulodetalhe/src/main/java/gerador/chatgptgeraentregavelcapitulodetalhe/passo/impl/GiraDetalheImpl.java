package gerador.chatgptgeraentregavelcapitulodetalhe.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.EntregavelCapituloDetalhe;
import gerador.chatgptgeraentregavelcapitulodetalhe.loopback.DatasetAplicacao;
import gerador.chatgptgeraentregavelcapitulodetalhe.passo.GiraDetalhe;



public class GiraDetalheImpl extends GiraDetalhe {

	
	
	
	@Override
	protected boolean executaCustom(List<EntregavelCapituloDetalhe> listaDetalhe) {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		for (EntregavelCapituloDetalhe detalhe : listaDetalhe) {
			ds.setItemDetalhe(detalhe);

			this.executaProximoSemFinalizar();
		}
		this.finalizar();
		return false;
	} 


}

