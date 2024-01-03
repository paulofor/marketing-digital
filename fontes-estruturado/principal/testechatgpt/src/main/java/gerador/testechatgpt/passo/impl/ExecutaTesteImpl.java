package gerador.testechatgpt.passo.impl;

import gerador.testechatgpt.passo.*;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

public class ExecutaTesteImpl extends ExecutaTeste {

	@Override
	protected boolean executaCustom() {
		String prompt = "Say this is a test";
		String resposta = fazerRequisicao(prompt);
		System.out.println("Resposta do ChatGPT: " + resposta);
		return true;
	}

	private String fazerRequisicao(String prompt) {
		try {
			String apiKey = ""; // Substitua com sua própria API Key do GPT-3

	        String endpoint = "https://api.openai.com/v1/completions";
	        int maxTokens = 7;
	        float temperature = 0.0f;
			
			
	        URL url = new URL(endpoint);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("POST");
            con.setRequestProperty("Content-Type", "application/json");
            con.setRequestProperty("Authorization", "Bearer " + apiKey);
            con.setDoOutput(true);

            String postData = "{ \"model\" :  \"gpt-3.5-turbo-instruct\", \"prompt\": \"" + prompt + "\", \"max_tokens\": " + maxTokens + ", \"temperature\": " + temperature + " }";

            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
            wr.writeBytes(postData);
            wr.flush();
            wr.close();

			BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
			String inputLine;
			StringBuilder response = new StringBuilder();

			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();

			return extrairResposta(response.toString());
		} catch (Exception e) {
			e.printStackTrace();
			return "Ocorreu um erro ao processar a requisição.";
		}
	}

	private String extrairResposta(String jsonResponse) {
		// Implemente a lógica para extrair a resposta do JSON aqui
		// Este exemplo simplesmente retorna o JSON de resposta para fins de
		// demonstração
		return jsonResponse;
	}

}
