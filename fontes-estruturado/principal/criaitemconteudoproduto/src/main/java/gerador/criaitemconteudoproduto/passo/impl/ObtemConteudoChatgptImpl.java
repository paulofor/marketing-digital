package gerador.criaitemconteudoproduto.passo.impl;


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
import br.com.gersis.loopback.modelo.ItemConteudoProduto;
import br.com.gersis.loopback.modelo.PromptItem;
import gerador.criaitemconteudoproduto.passo.ObtemConteudoChatgpt;



public class ObtemConteudoChatgptImpl extends ObtemConteudoChatgpt {

	@Override
	protected boolean executaCustom(PromptItem promptItemCorrente) {
		String prompt1 = promptItemCorrente.getPrompt();
		String prompt2 = promptItemCorrente.getProdutoProprio().getPromptEspecialista();
		//prompt1 = prompt1.replaceAll("---nome---", promptItemCorrente.get)
		List<ItemConteudoProduto> listaItem = new ArrayList<ItemConteudoProduto>();
		for (ConteudoProdutoKiwify item : promptItemCorrente.getEntregavelProduto().getConteudoProdutoKiwifys()) {
			if (item.getGeraTexto()==1) {
				String promptFinal = prompt1.replaceAll("---nome---", item.getNome());
				promptFinal = promptFinal.replaceAll("---subNome---", item.getSubNome());
				String resposta = this.fazerRequisicao(prompt2, promptFinal);
				ItemConteudoProduto conteudo = new ItemConteudoProduto();
				conteudo.setTexto(resposta);
				conteudo.setPromptItemId(promptItemCorrente.getIdInteger());
				conteudo.setConteudoProdutoKiwifyId(item.getIdInteger());
				listaItem.add(conteudo);
			}
		}
		this.saidaListaNovoConteudo = listaItem;
		return true;
		
	}

	
	private String fazerRequisicao(String promptRegra, String prompt) {
		try {
			Properties prop = new Properties();
			String path = "/etc/openai/config.properties"; // Substitua pelo seu caminho
			FileInputStream input = new FileInputStream(path);
			prop.load(input);

	
			JSONObject criterio = new JSONObject();
			criterio.put("role", "system");
			criterio.put("content", URLEncoder.encode(promptRegra, "UTF-8"));
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

