package gerador.testeads.passo.impl;

public class TesteAds {

	private String tabela;
	private String campo;
	
	public TesteAds(String tabela, String campo) {
		this.tabela = tabela;
		this.campo = campo;
	}
	
	public String getSql() {
		return "select " + tabela + "." + campo + " from " + tabela;
	}

	public String getTabela() {
		return tabela;
	}

	public String getCampo() {
		return campo;
	}
	
	
}
