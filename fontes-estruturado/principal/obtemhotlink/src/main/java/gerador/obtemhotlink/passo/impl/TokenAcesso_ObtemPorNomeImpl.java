package gerador.obtemhotlink.passo.impl;


import gerador.obtemhotlink.passo.*;



public class TokenAcesso_ObtemPorNomeImpl extends TokenAcesso_ObtemPorNome {

	@Override
	protected boolean executaCustom() {
		this.nome = "HOTMART";
		return true;
	} 


	
}

