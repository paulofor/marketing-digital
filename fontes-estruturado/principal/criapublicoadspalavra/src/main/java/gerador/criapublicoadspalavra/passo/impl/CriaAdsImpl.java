package gerador.criapublicoadspalavra.passo.impl;

import java.io.FileNotFoundException;
import java.io.IOException;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v15.enums.CustomAudienceMemberTypeEnum.CustomAudienceMemberType;
import com.google.ads.googleads.v15.enums.CustomAudienceStatusEnum.CustomAudienceStatus;
import com.google.ads.googleads.v15.enums.CustomAudienceTypeEnum.CustomAudienceType;
import com.google.ads.googleads.v15.resources.CustomAudience;
import com.google.ads.googleads.v15.resources.CustomAudienceMember;
import com.google.ads.googleads.v15.services.CustomAudienceOperation;
import com.google.ads.googleads.v15.services.CustomAudienceServiceClient;
import com.google.ads.googleads.v15.services.MutateCustomAudiencesResponse;
import com.google.common.collect.ImmutableList;

import br.com.gersis.loopback.modelo.ContaPublicoAlvoAdsPalavra;
import br.com.gersis.loopback.modelo.PublicoAlvoAdsPalavra;
import gerador.criapublicoadspalavra.passo.CriaAds;

public class CriaAdsImpl extends CriaAds {

	// custom_audience
	
	@Override
	protected boolean executaCustom(ContaPublicoAlvoAdsPalavra contaPublicoCorrente) {
		GoogleAdsClient googleAdsClient = null;
		try {
			long codigoUsuario = new Long(contaPublicoCorrente.getContaGoogle().getIdAds().replace("-", ""));
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			String resourceName = criaSegmento(googleAdsClient, codigoUsuario, contaPublicoCorrente.getPublicoAlvoAdsPalavra());
			this.saidaContaPublicoCorrente = contaPublicoCorrente;
			this.saidaContaPublicoCorrente.setResourceName(resourceName);
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
		}
		return true;
	} 

	
	private String criaSegmento(GoogleAdsClient googleAdsClient, long customerId, PublicoAlvoAdsPalavra publico) {
		
		String[] palavra = publico.getListaPalavra().split(",");

		CustomAudience.Builder customAudienceBuilder = CustomAudience.newBuilder()
		        .setName(publico.getNome())
		        .setDescription(publico.getNome() + " baseada em palavras")
		        .setType(CustomAudienceType.SEARCH)
		        .setStatus(CustomAudienceStatus.ENABLED);

		// Adicione membros ao CustomAudience usando os termos do array "palavra"
		for (String termo : palavra) {
		    customAudienceBuilder.addMembers(createCustomAudienceMember(CustomAudienceMemberType.KEYWORD, termo));
		}

		CustomAudience customAudience = customAudienceBuilder.build();
		
		
	    // Creates an operation to add the CustomAudience.
	    CustomAudienceOperation operation =
	        CustomAudienceOperation.newBuilder().setCreate(customAudience).build();

	    // Creates an API client and send the mutate request.
	    try (CustomAudienceServiceClient serviceClient =
	        googleAdsClient.getLatestVersion().createCustomAudienceServiceClient()) {
	      // Issues the mutate request.
	      MutateCustomAudiencesResponse response =
	          serviceClient.mutateCustomAudiences(
	              String.valueOf(customerId), ImmutableList.of(operation));

	      // Prints some information about the result.
	      System.out.printf(
	          "New custom audience added with resource name: '%s'.\n",
	          response.getResults(0).getResourceName());
	      return response.getResults(0).getResourceName();
	    }

	}


	  /**
	   * Constructs a {@link CustomAudienceMember} from a {@link CustomAudienceMemberType} and value for
	   * the member type.
	   */
	  private static CustomAudienceMember createCustomAudienceMember(
	      CustomAudienceMemberType memberType, String value) {
	    CustomAudienceMember.Builder builder =
	        CustomAudienceMember.newBuilder().setMemberType(memberType);
	    if (memberType == CustomAudienceMemberType.KEYWORD) {
	      builder.setKeyword(value);
	    } else if (memberType == CustomAudienceMemberType.URL) {
	      builder.setUrl(value);
	    } else if (memberType == CustomAudienceMemberType.APP) {
	      builder.setApp(value);
	    }
	    return builder.build();
	  }


}

