package gerador.ajustapixelgoogle.passo.impl.ads;

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
import br.com.gersis.loopback.modelo.PixelGoogle;
import br.com.gersis.loopback.modelo.PublicoAlvoAdsDiario;
import gerador.ajustapixelgoogle.passo.AcessaGoogleParaAjustePixel;

public abstract class PassoSqlGoogleAds extends AcessaGoogleParaAjustePixel{

	protected ContaGoogle conta = null;
	
	
	
	
	@Override
	protected boolean executaCustom(PixelGoogle pixel) {
		this.conta = getConta(pixel);
		System.out.println("Conta: " + this.conta.getNome());
		GoogleAdsClient googleAdsClient = null;
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			this.saidaPixelCorrente = consultaSql(googleAdsClient,pixel);
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
		}
		return true;
	} 
	
	

	private PixelGoogle consultaSql(GoogleAdsClient googleAdsClient, PixelGoogle pixel) {

		try (GoogleAdsServiceClient googleAdsServiceClient = googleAdsClient.getLatestVersion()
				.createGoogleAdsServiceClient()) {

			SearchGoogleAdsRequest request = SearchGoogleAdsRequest.newBuilder()
					.setCustomerId(Long.toString(getCodigoUsuario())).setQuery(getQuery(pixel)).build();
			System.out.println("Vai fazer search");
			SearchPagedResponse searchPagedResponse = googleAdsServiceClient.search(request);

			processaInicio();
			System.out.println("Resposta com " + searchPagedResponse.getPage().getResponse().getResultsCount() + " linhas");
			for (GoogleAdsRow linha : searchPagedResponse.getPage().getResponse().getResultsList()) {
				processaLinha(linha,pixel);
				
			}
			processaFinal();

		} catch (Exception e) {
			e.printStackTrace();
		}
		return pixel;
	}


	
	protected abstract String getQuery(PixelGoogle atual);
	protected abstract PixelGoogle processaLinha(GoogleAdsRow linha, PixelGoogle atual);
	protected abstract ContaGoogle getConta(PixelGoogle pixel);
	
	private void processaFinal() {}
	private void processaInicio() {}


	protected long getCodigoUsuario() {
		String textoSemHifens = this.conta.getIdAds().replace("-", "");
		long codigoUsuario = Long.parseLong(textoSemHifens);
		return codigoUsuario;
	}
}
