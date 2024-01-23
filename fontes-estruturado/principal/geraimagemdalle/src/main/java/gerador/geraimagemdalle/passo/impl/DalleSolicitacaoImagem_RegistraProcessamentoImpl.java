package gerador.geraimagemdalle.passo.impl;


import br.com.gersis.loopback.modelo.DalleSolicitacaoImagem;
import gerador.geraimagemdalle.passo.*;



public class DalleSolicitacaoImagem_RegistraProcessamentoImpl extends DalleSolicitacaoImagem_RegistraProcessamento {

	@Override
	protected boolean executaCustom(DalleSolicitacaoImagem solicitacaoCorrente) {
		this.idSolicitacao = solicitacaoCorrente.getIdInteger();
		return true;
	} 


}

