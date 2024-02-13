package gerador.gerapdfebooktermos.passo.impl;


import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Properties;

import org.json.JSONArray;
import org.json.JSONObject;

import br.com.gersis.loopback.modelo.ProdutoProprioItemNivel1;
import gerador.gerapdfebooktermos.passo.ObtemAtualizacaoChatGpt;



public class ObtemAtualizacaoChatGptImpl extends ObtemAtualizacaoChatGpt { 


	
	

	@Override
	protected boolean executaCustom(ProdutoProprioItemNivel1 itemCorrente) {
	    JSONObject item = new JSONObject(itemCorrente.getJson());
		String termo = itemCorrente.getNome();
		
		
		String prompt = "Me de uma explicacao do termo '" + termo + "' em uma linguagem simples e objetiva usando entre 3 e 6 linhas de texto. " +
				"  Nao repita o termo na resposta";
		
		String resposta = this.fazerRequisicao(prompt);
		item.put("explicacao", resposta);
		

		/*
		String prompt = " De uma resposta entre 3 e 6 linhas falando sobre a origem do termo '" + termo + "' na área de tecnologia, coloque datas e curiosidades. Evite começar 'O termo surgiu' use uma forma mais criativa de iniciar";
		
		String resposta = this.fazerRequisicao(prompt);
		item.put("historico", resposta);
		*/
		
		/*
		String prompt = "Em qual categoria dentro da tecnologia eu poderia classficar o termo '" + termo + "' ?";
		
		String resposta = this.fazerRequisicao(prompt);
		item.put("categoria", resposta);
		*/
		
		itemCorrente.setJson(item.toString());
		this.saidaItemCorrente = itemCorrente;
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
			int maxTokens = 500;
			float temperature = 0.4f;

			URL url = new URL(endpoint);
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("POST");
			con.setRequestProperty("Content-Type", "application/json");
			con.setRequestProperty("Authorization", "Bearer " + apiKey);
			con.setDoOutput(true);

			String postData = "{ \"model\" :  \"gpt-3.5-turbo-instruct\", \"prompt\": \"" + URLEncoder.encode(prompt, "UTF-8")
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
		JSONObject resultado = new JSONObject(jsonResponse);
		JSONArray choices = resultado.getJSONArray("choices");
		return choices.getJSONObject(0).getString("text");
	}

}

