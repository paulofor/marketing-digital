package gerador.chatgptrespondepublicoalvo.passo.impl;


import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.json.JSONArray;
import org.json.JSONObject;

import br.com.gersis.loopback.modelo.PerguntaPublicoAlvo;
import br.com.gersis.loopback.modelo.ProdutoProprio;
import br.com.gersis.loopback.modelo.RespostaPublicoAlvo;
import gerador.chatgptrespondepublicoalvo.passo.ChatGptRespondeItens;



public class ChatGptRespondeItensImpl extends ChatGptRespondeItens {


	
	

	@Override
	protected boolean executaCustom(ProdutoProprio produtoProprioCorrente, PerguntaPublicoAlvo perguntaCorrente,
			RespostaPublicoAlvo respostaCorrente) {
		try {
			if (ProcessadorChatGpt.inicial()) {
				String mensagemInicial = "Estou criando um produto para o mercado : " + produtoProprioCorrente.getMercadoPotencial().getNome().toUpperCase() + ".";
				mensagemInicial += "  " +perguntaCorrente.getPergunta();
				ProcessadorChatGpt.setMensagemInicial(mensagemInicial);
				return false;
			} else {
				RespostaPublicoAlvo saida = this.acessaChatGpt(produtoProprioCorrente,perguntaCorrente);
				this.saidaRespostaCorrente = saida;
				return true;
			}
		} catch (Exception e ) {
			e.printStackTrace();
			return false;
		}
	}



	private RespostaPublicoAlvo acessaChatGpt(ProdutoProprio produtoProprioCorrente, PerguntaPublicoAlvo perguntaCorrente) 
			throws Exception {

				Properties prop = new Properties();
				String path = "/etc/openai/config.properties"; // Substitua pelo seu caminho
				FileInputStream input = new FileInputStream(path);
				prop.load(input);

				// Obtenha a api_key
				String apiKey = prop.getProperty("api_key");

				String endpoint = "https://api.openai.com/v1/chat/completions";
				float temperature = 0.2f;

				URL url = new URL(endpoint);
				HttpURLConnection con = (HttpURLConnection) url.openConnection();
				con.setRequestMethod("POST");
				con.setRequestProperty("Content-Type", "application/json");
				con.setRequestProperty("Authorization", "Bearer " + apiKey);
				con.setDoOutput(true);

				//String postData = "{ \"model\" :  \"gpt-3.5-turbo-instruct\", \"prompt\": \"" + prompt
				//		+ "\", \"max_tokens\": " + maxTokens + ", \"temperature\": " + temperature + " }";
				
				
				JSONArray mensagens = new JSONArray();
				
				JSONObject mensagem1 = new JSONObject();
				mensagem1.put("role", "system");
				mensagem1.put("content", ProcessadorChatGpt.getMensagemInicial());
				mensagens.put(mensagem1);
				
				for (PerguntaResposta mensagem : ProcessadorChatGpt.lista()) {
					JSONObject pergunta = new JSONObject();
					pergunta.put("role", "user");
					pergunta.put("content", mensagem.getPergunta().getPergunta());
					mensagens.put(pergunta);
					
					JSONObject resposta = new JSONObject();
					resposta.put("role", "assistant");
					resposta.put("content", mensagem.getResposta().getResposta());
					mensagens.put(resposta);
				}
				
				
				JSONObject pergunta = new JSONObject();
				pergunta.put("role", "user");
				pergunta.put("content", perguntaCorrente.getPergunta());
				mensagens.put(pergunta);

				
				//JSONObject perguntaTeste = new JSONObject();
				//perguntaTeste.put("role", "user");
				//perguntaTeste.put("content", "O que você sabe fazer ?");
				//mensagens.put(perguntaTeste);
				
			    // Criando o objeto JSON
			    JSONObject json = new JSONObject();
			    //json.put("model", "o1-preview");
			    json.put("model", "gpt-4o");

			    json.put("temperature", 0.4);
			    json.put("messages", mensagens); 

			    // Convertendo o objeto para uma string JSON
			    String postData = json.toString();
			    //String textoCodificado = new String(postData.getBytes(StandardCharsets.UTF_8), StandardCharsets.UTF_8);

			    System.out.println(postData);

			    try (OutputStreamWriter writer = new OutputStreamWriter(con.getOutputStream(), StandardCharsets.UTF_8)) {
			        writer.write(postData);
			        writer.flush();
			        writer.close();
			    }
			    
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
				String inputLine;
				StringBuilder response = new StringBuilder();

				while ((inputLine = in.readLine()) != null) {
					response.append(inputLine);
				}
				in.close();
				
				// Convertendo o conteúdo do StringBuilder para um JSONObject
				JSONObject jsonObject = new JSONObject(response.toString());

				// Exibindo o JSONObject para ver o conteúdo
				System.out.println(jsonObject.toString(4));
				
				 // Navegar até o campo "content"
		        String content = jsonObject
		                .getJSONArray("choices") // Acessa o array "choices"
		                .getJSONObject(0)       // Pega o primeiro objeto do array
		                .getJSONObject("message") // Pega o objeto "message"
		                .getString("content");   // Pega o valor do campo "content"

		        // Imprimir o valor de "content"
		        System.out.println("Conteúdo da mensagem: " + content);
		        
		        RespostaPublicoAlvo respostaSaida = new RespostaPublicoAlvo();
		        respostaSaida.setResposta(content);
		        respostaSaida.setProdutoProprioId(produtoProprioCorrente.getIdInteger());
		        respostaSaida.setPerguntaPublicoAlvoId(perguntaCorrente.getIdInteger());

		        ProcessadorChatGpt.add(perguntaCorrente,respostaSaida);
		        return respostaSaida;
		}

		private String extrairResposta(String jsonResponse) {
			// Implemente a lógica para extrair a resposta do JSON aqui
			// Este exemplo simplesmente retorna o JSON de resposta para fins de
			// demonstração
			return jsonResponse;
		}



}
