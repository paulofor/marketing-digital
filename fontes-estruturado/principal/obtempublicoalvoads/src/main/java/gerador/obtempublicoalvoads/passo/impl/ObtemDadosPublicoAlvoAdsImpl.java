package gerador.obtempublicoalvoads.passo.impl;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.services.GoogleAdsRow;

import br.com.gersis.loopback.modelo.ContaGoogle;
import br.com.gersis.loopback.modelo.PublicoAlvoAdsDiario;
import gerador.obtempublicoalvoads.passo.impl.ads.PassoSqlGoogleAds;



public class ObtemDadosPublicoAlvoAdsImpl extends PassoSqlGoogleAds {

	@Override
	protected boolean processaLinha(GoogleAdsRow linha, PublicoAlvoAdsDiario novo) {
		System.out.println("Nome:" + linha.getUserList().getName());
		System.out.println("TamanhoDisplay:" + linha.getUserList().getSizeForDisplay());
		System.out.println("TamanhoPesquisa:" + linha.getUserList().getSizeForSearch());
		novo.setNome(linha.getUserList().getName());
		novo.setResourceName(linha.getUserList().getResourceName());
		novo.setTamanhoRedeDisplay((int)linha.getUserList().getSizeForDisplay());
		novo.setTamanhoRedePesquisa((int)linha.getUserList().getSizeForSearch());
		novo.setContaGoogleId(new Integer(this.conta.getId().toString()));
		return true;
	}

	@Override
	protected String getQuery() {
	    String query = "SELECT user_list.name, user_list.size_for_display, user_list.size_for_search, user_list.resource_name " +
	    		" FROM user_list ";
	    return query;
	}



}

