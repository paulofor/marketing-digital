package gerador.testechatgpt.passo.impl;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Properties;

import gerador.testechatgpt.passo.ExecutaTeste;

public class ExecutaTesteImpl extends ExecutaTeste {

	@Override
	protected boolean executaCustom() {
		//String prompt = "Quem descobriu o Brasil ?";
		String prompt = "Me de uma eplicacao sobre o termo computador";
		String resposta = fazerRequisicao(prompt);
		System.out.println("Resposta do ChatGPT: " + resposta);
		return true;
	}

	private String fazerRequisicao(String prompt) {
		try {
			Properties prop = new Properties();
			String path = "/etc/openai/config.properties"; // Substitua pelo seu caminho
			FileInputStream input = new FileInputStream(path);
			prop.load(input);

			// Obtenha a api_key
			String apiKey = prop.getProperty("api_key");

			String endpoint = "https://api.openai.com/v1/completions";
			int maxTokens = 200;
			float temperature = 0.0f;

			URL url = new URL(endpoint);
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("POST");
			con.setRequestProperty("Content-Type", "application/json");
			con.setRequestProperty("Authorization", "Bearer " + apiKey);
			con.setDoOutput(true);

			String postData = "{ \"model\" :  \"gpt-3.5-turbo-instruct\", \"prompt\": \"" + prompt
					+ "\", \"max_tokens\": " + maxTokens + ", \"temperature\": " + temperature + " }";

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
