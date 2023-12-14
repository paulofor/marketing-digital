package gerador.atualizaafiliados.passo.impl;


import br.com.gersis.loopback.modelo.TokenAcesso;
import gerador.atualizaafiliados.passo.*;



public class TokenAcesso_RegistraAcessoImpl extends TokenAcesso_RegistraAcesso {

	@Override
	protected boolean executaCustom(TokenAcesso token) {
		if (token!=null) {
			this.nome = token.getNome();
			return true;
		} else {
			return false;
		}
	} 


}

