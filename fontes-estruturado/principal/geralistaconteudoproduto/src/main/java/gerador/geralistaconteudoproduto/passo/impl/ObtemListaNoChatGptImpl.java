package gerador.geralistaconteudoproduto.passo.impl;


import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.json.JSONArray;
import org.json.JSONObject;

import br.com.gersis.loopback.modelo.ConteudoProdutoKiwify;
import br.com.gersis.loopback.modelo.EntregavelProduto;
import gerador.geralistaconteudoproduto.passo.ObtemListaNoChatGpt;



public class ObtemListaNoChatGptImpl extends ObtemListaNoChatGpt {

	@Override
	protected boolean executaCustom(EntregavelProduto entregavelCorrente) {
		String promptCompleto = entregavelCorrente.getPromptLista() + ". Responda em formato de lista um array de strings";
		String resposta = this.fazerRequisicao(promptCompleto, entregavelCorrente.getProdutoProprio().getPromptEspecialista());
		resposta = resposta.replaceAll("\n", "");
		int startIndex = resposta.indexOf("["); // O índice do primeiro caractere após "```json"
        int endIndex = resposta.lastIndexOf("]") + 2; // O índice do último caractere antes do último "```"
        String jsonString = resposta.substring(startIndex, endIndex);

        // Parseando a string JSON para um JSONArray
        JSONArray jsonArray = new JSONArray(jsonString);

        // Criando uma lista para armazenar os tipos de dieta
        List<String> dietas = new ArrayList<>();

        // Iterando sobre os elementos do JSONArray e adicionando à lista
        for (int i = 0; i < jsonArray.length(); i++) {
            String dieta = jsonArray.getString(i);
            dietas.add(dieta);
        }

        // Convertendo a lista para um array de strings
        String[] termo = dietas.toArray(new String[0]);
		
		List<ConteudoProdutoKiwify> listaConteudo = new ArrayList<ConteudoProdutoKiwify>();
		for (String item : termo) {
			ConteudoProdutoKiwify conteudo = new ConteudoProdutoKiwify();
			conteudo.setEntregavelProdutoId(entregavelCorrente.getIdInteger());
			conteudo.setNome(item);
			listaConteudo.add(conteudo);
		}
		this.saidaListaConteudo = listaConteudo;
		return true;
	} 

	private String fazerRequisicao(String prompt, String regra) {
		try {
			Properties prop = new Properties();
			String path = "/etc/openai/config.properties"; // Substitua pelo seu caminho
			FileInputStream input = new FileInputStream(path);
			prop.load(input);

	
			JSONObject criterio = new JSONObject();
			criterio.put("role", "system");
			criterio.put("content", URLEncoder.encode(regra, "UTF-8"));
			JSONObject solicitacao = new JSONObject();
			solicitacao.put("role", "user");
			solicitacao.put("content", URLEncoder.encode(prompt, "UTF-8"));
			
			// Criando o array JSON e adicionando os objetos JSON
            JSONArray mensagemArray = new JSONArray();
            mensagemArray.put(criterio);
            mensagemArray.put(solicitacao);

  			
			// Obtenha a api_key
			String apiKey = prop.getProperty("api_key");

			String endpoint = "https://api.openai.com/v1/chat/completions";
			int maxTokens = 2000;
			float temperature = 0.2f;

			URL url = new URL(endpoint);
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("POST");
			con.setRequestProperty("Content-Type", "application/json");
			con.setRequestProperty("Authorization", "Bearer " + apiKey);
			con.setDoOutput(true);

			//String postData = "{ \"model\" :  \"gpt-4-turbo-preview\", \"prompt\": \"" + URLEncoder.encode(prompt, "UTF-8")
			//		+ "\", \"max_tokens\": " + maxTokens + ", \"temperature\": " + temperature + " }";
			
			String postData = "{ \"model\" :  \"gpt-4-turbo-preview\", \"messages\": " + mensagemArray.toString()
				+ ", \"max_tokens\": " + maxTokens + ", \"temperature\": " + temperature + " }";

			System.out.println(postData);
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

		JSONObject resultado = new JSONObject(jsonResponse);
		JSONArray choices = resultado.getJSONArray("choices");
		JSONObject message = choices.getJSONObject(0).getJSONObject("message");
		return message.getString("content");
	}
}

