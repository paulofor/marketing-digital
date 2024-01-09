package gerador.testegerapdf.passo.impl;


import java.io.IOException;

import gerador.testegerapdf.passo.GeradorPdf;



public class GeradorPdfImpl extends GeradorPdf { 

	
	
	
	 @Override
	protected boolean executaCustom() {
		 PdfCreator aplicacao = new PdfCreator();
		 aplicacao.criaPdf("BIOS", "descricao bem legal", "exemplo legal blablablabla", "Redes", "/home/usuario/aplicacoes/MarketingDigital/pagina-venda-pesquisa-desenvolvimento/recursos/257gbaq.png");
		 return true;
	}

	public void criaPdf(String titulo, String descricao, String exemplo, String categoria, String caminhoImagem) {
		

	 }
}

