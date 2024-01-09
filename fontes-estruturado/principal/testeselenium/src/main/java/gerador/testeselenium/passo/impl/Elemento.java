package gerador.testeselenium.passo.impl;

public class Elemento {
	
	private String id;
	private String style;
	
	public Elemento(String id, String style) {
		this.id = id;
		this.style = style;
	}

	public String getId() {
		return id;
	}

	public String getStyle() {
		return style;
	}
	
	
}
