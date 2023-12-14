package gerador.obtempublicoalvoads.passo.impl.ads;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.LinkedList;
import java.util.List;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.services.GoogleAdsRow;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient.SearchPagedResponse;
import com.google.ads.googleads.v13.services.SearchGoogleAdsRequest;

import br.com.gersis.loopback.modelo.ContaGoogle;
import br.com.gersis.loopback.modelo.PublicoAlvoAdsDiario;
import gerador.obtempublicoalvoads.passo.ObtemDadosPublicoAlvoAds;

public abstract class PassoSqlGoogleAds extends ObtemDadosPublicoAlvoAds{

	
	@Override
	protected boolean executaCustom(ContaGoogle contaCorrente) {
		System.out.println("Conta: " + contaCorrente.getNome());
		GoogleAdsClient googleAdsClient = null;
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			List<PublicoAlvoAdsDiario> metrica = consultaSql(googleAdsClient, contaCorrente);
	        this.saidaListaPublico = metrica;
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
		}
		return true;
	} 
	
	private List<PublicoAlvoAdsDiario> consultaSql(GoogleAdsClient googleAdsClient, ContaGoogle contaCorrente) {
		List<PublicoAlvoAdsDiario> listaSaida = new LinkedList<PublicoAlvoAdsDiario>();
		try (GoogleAdsServiceClient googleAdsServiceClient = googleAdsClient.getLatestVersion()
				.createGoogleAdsServiceClient()) {

			SearchGoogleAdsRequest request = SearchGoogleAdsRequest.newBuilder()
					.setCustomerId(Long.toString(getCodigoUsuario(contaCorrente))).setQuery(getQuery()).build();
			System.out.println("Vai fazer search");
			SearchPagedResponse searchPagedResponse = googleAdsServiceClient.search(request);

			processaInicio();
			System.out.println("Resposta com " + searchPagedResponse.getPage().getResponse().getResultsCount() + " linhas");
			for (GoogleAdsRow linha : searchPagedResponse.getPage().getResponse().getResultsList()) {
				PublicoAlvoAdsDiario novo = new PublicoAlvoAdsDiario();
				if (processaLinha(linha,novo)) {
					listaSaida.add(novo);
				}
			}
			processaFinal();

		} catch (Exception e) {
			e.printStackTrace();
		}
		return listaSaida;
	}


	protected abstract String getQuery();
	protected abstract boolean processaLinha(GoogleAdsRow linha, PublicoAlvoAdsDiario novo);

	private void processaFinal() {}
	private void processaInicio() {}


	protected long getCodigoUsuario(ContaGoogle contaCorrente) {
		String textoSemHifens = contaCorrente.getIdAds().replace("-", "");
		long codigoUsuario = Long.parseLong(textoSemHifens);
		return codigoUsuario;
	}
}
