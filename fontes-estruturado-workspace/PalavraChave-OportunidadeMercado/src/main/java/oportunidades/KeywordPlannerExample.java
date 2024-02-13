package oportunidades;



public class KeywordPlannerExample {

  public static void main(String[] args) throws GoogleAdsException {
    // Crie um cliente Google Ads.
    GoogleAdsClient googleAdsClient = GoogleAdsClient.newBuilder().build();

    // Crie um serviço KeywordPlanner.
    KeywordPlannerServiceClient keywordPlannerServiceClient = googleAdsClient.getLatestVersion().createKeywordPlannerServiceClient();

    // Crie uma solicitação de pesquisa de palavras-chave.
    KeywordPlanRequest request = KeywordPlanRequest.newBuilder()

        .setLanguageCode("pt-BR")
        .setLocation("Rio de Janeiro, State of Rio de Janeiro, Brazil")
        .setNetwork(com.google.ads.googleads.v15.enums.NetworkEnum.Network.SEARCH)
        .setKeywordPlanIdea(KeywordPlanIdea.newBuilder()
            .setKeywordText("como fazer")
            .setMatchType(KeywordMatchTypeEnum.KeywordMatchType.EXACT)
            .setIncludeAdultKeywords(false)
            .build())
        .build();

    // Execute a solicitação e obtenha os resultados.
    KeywordPlanResponse response = keywordPlannerServiceClient.generateKeywordIdeas(request);

    // Lista para armazenar os termos.
    List<String> termos = new ArrayList<>();

    // Analise a resposta e obtenha os termos.
    for (KeywordPlanIdea keywordPlanIdea : response.getKeywordPlanIdeas()) {
      if (keywordPlanIdea.getMonthlySearches() > 200000) {
        termos.add(keywordPlanIdea.getKeywordText());
      }
    }

    // Ordene os termos por número de pesquisas mensais.
    Collections.sort(termos, (t1, t2) -> Long.compare(response.getKeywordPlanIdeas().get(t1).getMonthlySearches(), response.getKeywordPlanIdeas().get(t2).getMonthlySearches()));

    // Lim

