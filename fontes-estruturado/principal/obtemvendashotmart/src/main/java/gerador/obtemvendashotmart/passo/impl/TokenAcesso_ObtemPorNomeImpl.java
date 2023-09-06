package gerador.obtemvendashotmart.passo.impl;


import gerador.obtemvendashotmart.passo.*;



public class TokenAcesso_ObtemPorNomeImpl extends TokenAcesso_ObtemPorNome {

	@Override
	protected boolean executaCustom() {
		this.nome = "HOTMART";
		return true;
	} 


}

