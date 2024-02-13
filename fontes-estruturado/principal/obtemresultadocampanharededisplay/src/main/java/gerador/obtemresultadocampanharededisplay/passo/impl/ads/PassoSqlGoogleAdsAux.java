package gerador.obtemresultadocampanharededisplay.passo.impl.ads;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.LinkedList;
import java.util.List;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v15.services.GoogleAdsRow;
import com.google.ads.googleads.v15.services.GoogleAdsServiceClient;
import com.google.ads.googleads.v15.services.SearchGoogleAdsRequest;
import com.google.ads.googleads.v15.services.GoogleAdsServiceClient.SearchPagedResponse;

import br.com.gersis.loopback.modelo.ContaGoogle;
import br.com.gersis.loopback.modelo.PublicoAlvoAdsDiario;

public class PassoSqlGoogleAdsAux {

	private ContaGoogle conta = null;
	private List<GoogleAdsRow> lista = null;

	public List<GoogleAdsRow> getLista() {
		return lista;
	}
	
	public PassoSqlGoogleAdsAux(ContaGoogle contaCorrente, String query) {
		System.out.println("Conta: " + contaCorrente.getNome());
		this.conta = contaCorrente;
		GoogleAdsClient googleAdsClient = null;
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			lista = consultaSql(googleAdsClient,query);
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
		}
	} 
	
	private List<GoogleAdsRow> consultaSql(GoogleAdsClient googleAdsClient, String query) {
		try (GoogleAdsServiceClient googleAdsServiceClient = googleAdsClient.getLatestVersion()
				.createGoogleAdsServiceClient()) {

			SearchGoogleAdsRequest request = SearchGoogleAdsRequest.newBuilder()
					.setCustomerId(Long.toString(getCodigoUsuario())).setQuery(query).build();
			System.out.println("Vai fazer search");
			SearchPagedResponse searchPagedResponse = googleAdsServiceClient.search(request);

			System.out.println("Resposta com " + searchPagedResponse.getPage().getResponse().getResultsCount() + " linhas");
			return searchPagedResponse.getPage().getResponse().getResultsList();
	
		} catch (Exception e) {
			e.printStackTrace();
			System.exit(1);
			return null;
		}
	}


	protected long getCodigoUsuario() {
		String textoSemHifens = this.conta.getIdAds().replace("-", "");
		long codigoUsuario = Long.parseLong(textoSemHifens);
		return codigoUsuario;
	}

}
