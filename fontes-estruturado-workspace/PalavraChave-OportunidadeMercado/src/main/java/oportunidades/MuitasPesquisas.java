package oportunidades;

import java.io.IOException;

import com.google.ads.googleads.v15.services.GoogleAdsRow;

public class MuitasPesquisas {

	  public static void main(String[] args) throws IOException {
		String sql = "SELECT keyword.text , keyword.monthly_searches FROM keyword_plan_idea HERE
		    keyword.match_type = 'EXACT'
		    AND keyword.keyword_text LIKE 'como fazer%'
		    AND keyword.monthly_searches > 200000
		ORDER BY
		    keyword.monthly_searches DESC
		LIMIT
		    50;

		  String sql = "SELECT keyword_text, keyword_match_type FROM keyword_view WHERE search_query LIKE 'como fazer%' AND search_query >= 200000 ORDER BY search_query DESC limit 50";
		  PassoSqlGoogleAdsAux passo = new PassoSqlGoogleAdsAux(sql);
		  for (GoogleAdsRow linha : passo.getLista()) {
			  System.out.println(linha.toString());
		  }
	  }
}
