package gerador.testeads.passo.impl;

public class TesteAds {

	private String tabela;
	private String campo;
	private String campanha;
	private String grupoAnuncio;
	
	public TesteAds(String tabela, String campo) {
		this.tabela = tabela;
		this.campo = campo;
	}
	
	
	
	public void setCampanha(String campanha) {
		this.campanha = campanha;
	}
	


	public void setGrupoAnuncio(String grupoAnuncio) {
		this.grupoAnuncio = grupoAnuncio;
	}



	public String getSql() {
		if (campanha != null) return "select " + tabela + "." + campo + " from " + tabela + " where campaign.resource_name = '" + campanha + "'";
		if (grupoAnuncio != null) return "select " + tabela + "." + campo + " from " + tabela + " where ad_group.resource_name = '" + grupoAnuncio + "'";
		else return "select " + tabela + "." + campo + " from " + tabela;
	}

	public String getTabela() {
		return tabela;
	}

	public String getCampo() {
		return campo;
	}
	
	
}
