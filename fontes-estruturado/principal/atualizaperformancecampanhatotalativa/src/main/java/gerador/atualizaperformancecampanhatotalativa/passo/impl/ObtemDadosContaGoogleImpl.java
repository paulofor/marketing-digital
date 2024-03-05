package gerador.atualizaperformancecampanhatotalativa.passo.impl;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v15.services.GoogleAdsRow;
import com.google.ads.googleads.v15.services.GoogleAdsServiceClient;
import com.google.ads.googleads.v15.services.SearchGoogleAdsRequest;
import com.google.ads.googleads.v15.services.GoogleAdsServiceClient.SearchPagedResponse;

import br.com.gersis.loopback.modelo.CampanhaAdsMetrica;
import br.com.gersis.loopback.modelo.ContaGoogle;
import br.com.gersis.loopback.modelo.ContaGoogleMetricaMes;
import gerador.atualizaperformancecampanhatotalativa.passo.ObtemDadosContaGoogle;



public class ObtemDadosContaGoogleImpl extends ObtemDadosContaGoogle {

	@Override
	protected boolean executaCustom(ContaGoogle contaCorrente) {
		System.out.println("Conta: " + contaCorrente.getNome());
		GoogleAdsClient googleAdsClient = null;
		String textoSemHifens = contaCorrente.getIdAds().replace("-", "");
		long codigoUsuario = Long.parseLong(textoSemHifens);
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			
			// Access and print individual fields
	        System.out.println("Developer Token: " + googleAdsClient.getDeveloperToken());
	        System.out.println("Login Customer ID: " + googleAdsClient.getLoginCustomerId());
	        System.out.println("Credenciais: " + googleAdsClient.getCredentials().toString());

	        ContaGoogleMetricaMes metrica = consultaSql(googleAdsClient, contaCorrente);
	        this.saidaMetricaConta = metrica;
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
		}
		return true;
	}

	private ContaGoogleMetricaMes consultaSql(GoogleAdsClient googleAdsClient, ContaGoogle contaCorrente) {
		ContaGoogleMetricaMes metrica = new ContaGoogleMetricaMes();
		metrica.setContaGoogleId(new Integer(contaCorrente.getId().toString()));
		
		String textoSemHifens = contaCorrente.getIdAds().replace("-", "");
		long codigoUsuario = Long.parseLong(textoSemHifens);

		String query = "SELECT " + "metrics.cost_micros, campaign.status " + "FROM " + "campaign " + "WHERE "
				+ "segments.date DURING THIS_MONTH";
		// "WHERE campaign.status = 'ENABLE'";
		System.out.println("Query:" + query);

		List<CampanhaAdsMetrica> listaMetrica = new ArrayList<CampanhaAdsMetrica>();
		try (GoogleAdsServiceClient googleAdsServiceClient = googleAdsClient.getLatestVersion()
				.createGoogleAdsServiceClient()) {

			SearchGoogleAdsRequest request = SearchGoogleAdsRequest.newBuilder()
					.setCustomerId(Long.toString(codigoUsuario)).setQuery(query).build();
			// Issues the search request.
			System.out.println("Vai fazer search");
			SearchPagedResponse searchPagedResponse = googleAdsServiceClient.search(request);

			long soma = 0;
			int campanhaAtiva = 0;
			for (GoogleAdsRow linha : searchPagedResponse.getPage().getResponse().getResultsList()) {
				soma += linha.getMetrics().getCostMicros();
				if ("ENABLED".equals(linha.getCampaign().getStatus().toString()))
					campanhaAtiva++;
			}
			System.out.printf("Custo total da conta no mês corrente: $%.2f%n", soma / 1_000_000.0);
			System.out.println("Ativa : " + campanhaAtiva);
			
			metrica.setQtdeCampanhaAtiva(campanhaAtiva);
			metrica.setCustoAtual(soma / 1_000_000.0);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return metrica;

	}

	
	
}

