package gerador.atualizaafiliados.passo.impl;


import gerador.atualizaafiliados.passo.*;



public class TokenAcesso_ObtemPorNomeImpl extends TokenAcesso_ObtemPorNome {

	@Override
	protected boolean executaCustom() {
		this.nome = "HOTMART";
		return true;
	} 


}

