package oportunidades;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.JSONArray;
import org.json.JSONObject;

public class GoogleTrendsAPI {
    public static void main(String[] args) {
        try {
            String phrase = "como trabalhar embarcado";
            String timeframe = "today 1-m"; // Último mês
            String geo = "BR"; // País: Brasil

            // Construir a URL da solicitação
            String url = "https://trends.google.com/trends/api/widgetdata/multiline?hl=pt-BR&tz=360&req={\"time\":\"" +
                    timeframe + "\",\"resolution\":\"MONTH\",\"locale\":\"pt-BR\",\"comparisonItem\":[{\"geo\":{\"country\":\"" +
                    geo + "\"},\"complexKeywordsRestriction\":{\"keyword\":[{\"type\":\"BROAD\",\"value\":\"" +
                    phrase + "\"}]}}],\"requestOptions\":{\"property\":\"\"},\"backend\":\"IZG\",\"widget\":{\"request\":{\"time\":\"" +
                    timeframe + "\",\"geo\":{\"country\":\"" + geo + "\"},\"resolution\":\"MONTH\",\"locale\":\"pt-BR\",\"comparisonItem\":[{\"geo\":{\"country\":\"" +
                    geo + "\"},\"complexKeywordsRestriction\":{\"keyword\":[{\"type\":\"BROAD\",\"value\":\"" +
                    phrase + "\"}]}}],\"requestOptions\":{\"property\":\"\",\"backend\":\"IZG\",\"category\":0,\"tld\":\"\",\"hl\":\"pt-BR\",\"tz\":360}}}}";

            // Abrir conexão HTTP
            HttpURLConnection connection = (HttpURLConnection) new URL(url).openConnection();
            connection.setRequestMethod("GET");

            // Ler a resposta
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            StringBuilder response = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            // Analisar a resposta JSON
            JSONObject jsonResponse = new JSONObject(response.toString());
            JSONArray timelineData = jsonResponse.getJSONArray("default");

            // Calcular a quantidade total de pesquisas
            int searchCount = 0;
            for (int i = 0; i < timelineData.length(); i++) {
                JSONArray timeData = timelineData.getJSONObject(i).getJSONArray("value");
                for (int j = 0; j < timeData.length(); j++) {
                    searchCount += timeData.getJSONArray(j).getInt(0);
                }
            }

            // Exibir a quantidade total de pesquisas
            System.out.println("A frase \"" + phrase + "\" foi pesquisada " + searchCount + " vezes no último mês.");

            // Fechar a conexão
            connection.disconnect();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

