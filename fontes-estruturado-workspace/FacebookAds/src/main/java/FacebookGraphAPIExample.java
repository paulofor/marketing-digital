import java.io.IOException;
import java.net.URLEncoder;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

public class FacebookGraphAPIExample {
    public static void main(String[] args) throws IOException {
        // Substitua ACCESS_TOKEN pelo seu token de acesso de página
        String accessToken = "EAAKC02fQtUgBOZBxlgA1jQYf2vFZAa1Wf8qh3C63BTnna3rJwnvoOdVPYzQctY6n64H1FBuUVdHfeqrjVrGgk2uYxAIZARLrjoV0zDBIpjyDWwGz5KTzSPCvRknjW66XFx28nuCCH5HXYBPxNWJIo0MU5EnZAepSwWmXj932p8OFLqeNKHe6WtPIyBSjLdGKuLvBCnQ65AEEesZBt7AZDZD";

        
        // Isso deu certo !!!!
        //String encodedFields = URLEncoder.encode("campaigns{id,name}", "UTF-8");
        //String apiUrl = "https://graph.facebook.com/v19.0/me/adaccounts?fields=" + encodedFields + "&access_token=" + accessToken;

        
        
        // Cria um cliente HTTP
        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
            // Cria uma solicitação HTTP GET
            HttpGet request = new HttpGet(apiUrl);

            // Executa a solicitação e obtém a resposta
            try (CloseableHttpResponse response = httpClient.execute(request)) {
                // Verifica se a resposta foi bem-sucedida (código de status 200)
                if (response.getStatusLine().getStatusCode() == 200) {
                    // Lê o conteúdo da resposta como uma string JSON
                    String jsonResponse = EntityUtils.toString(response.getEntity());

                    // Imprime a resposta JSON
                    System.out.println(jsonResponse);
                } else {
                    // Imprime uma mensagem de erro se a solicitação falhar
                    System.out.println("Falha na solicitação: " + response.getStatusLine().getReasonPhrase());
                }
            }
        }
    }
}

