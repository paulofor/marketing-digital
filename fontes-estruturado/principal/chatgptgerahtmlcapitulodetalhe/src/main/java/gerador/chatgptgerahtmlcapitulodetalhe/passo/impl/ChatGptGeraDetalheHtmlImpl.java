package gerador.chatgptgerahtmlcapitulodetalhe.passo.impl;


import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Properties;

import org.json.JSONArray;
import org.json.JSONObject;

import br.com.gersis.loopback.modelo.EntregavelCapitulo;
import br.com.gersis.loopback.modelo.EntregavelCapituloDetalhe;
import br.com.gersis.loopback.modelo.EntregavelProduto;
import gerador.chatgptgerahtmlcapitulodetalhe.passo.ChatGptGeraDetalheHtml;



public class ChatGptGeraDetalheHtmlImpl extends ChatGptGeraDetalheHtml {

	private JSONArray mensagens = new JSONArray();
	
	@Override
	protected boolean executaCustom(EntregavelProduto entregavelCorrente) {
		try {
			mensagens = new JSONArray();
			saidaListaDetalhe = new ArrayList<EntregavelCapituloDetalhe>();
			System.out.println("Entregavel: " + entregavelCorrente.getNome());
			for (EntregavelCapitulo capitulo : entregavelCorrente.getEntregavelCapitulos()) {
				System.out.println("Capitulo: " + capitulo.getNumero() + "." + capitulo.getNome());
				for (EntregavelCapituloDetalhe detalhe: capitulo.getEntregavelCapituloDetalhes()) {
					System.out.println("Tamanho descrição:" + detalhe.getMarkup());
					String saidaGpt = acessaChatGpt(entregavelCorrente, capitulo, detalhe);
					int startIndex = saidaGpt.indexOf("{");
					int endIndex = saidaGpt.lastIndexOf("}");
					String jsonString = saidaGpt.substring(startIndex, endIndex + 1);
					JSONObject json = new JSONObject(jsonString);
					detalhe.setHtml(json.getString("html"));
					
					//detalhe.setEntregavelCapitulo(capitulo);
					saidaListaDetalhe.add(detalhe);
				}
			}
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	} 

	private String acessaChatGpt(EntregavelProduto entregavel, EntregavelCapitulo capitulo, EntregavelCapituloDetalhe detalhe) throws Exception {

		Properties prop = new Properties();
		String path = "/etc/openai/config.properties"; // Substitua pelo seu caminho
		FileInputStream input = new FileInputStream(path);
		prop.load(input);

		// Obtenha a api_key
		String apiKey = prop.getProperty("api_key");

		String endpoint = "https://api.openai.com/v1/chat/completions";

		URL url = new URL(endpoint);
		HttpURLConnection con = (HttpURLConnection) url.openConnection();
		con.setRequestMethod("POST");
		con.setRequestProperty("Content-Type", "application/json");
		con.setRequestProperty("Authorization", "Bearer " + apiKey);
		con.setDoOutput(true);

	
		/*
		String texto = "Gere " + this.generateRandomInt(6, 9) + "  capítulos para o ebook " + entregavelCorrente.getNome() + " - "
				+ entregavelCorrente.getDescricao() + "."
				+ "Precisam ser objetivos e eficazes para resolver os problemas do público alvo. "
				+ "Precisa ser atraente para despertar desejo e curiosidade para a leitura. "
				+ "Responda em formato json [{'capitulo' : '', 'descricao':''}]"
				+ "No campo capitulo não coloque o número do capítulos ";
		*/
		
		//this.promptDefinicao = texto;

		
		String texto = "Gere um código html desse texto markup '''" + detalhe.getMarkup() + "''' " +
				"Faça um design para ser convertido em ebook. Mantenha o padrão dos códigos anteriores " +
				"Coloque o html em um objeto <section>." +
				"Responda em formato json {'html' : ''}";
				

		JSONObject pergunta = new JSONObject();
		pergunta.put("role", "user");
		pergunta.put("content", texto);
		mensagens.put(pergunta);

		// Criando o objeto JSON
		JSONObject json = new JSONObject();
		//json.put("model", "o1-preview");
		 json.put("model", "gpt-4o");

		// json.put("temperature", 0.4);
		json.put("messages", mensagens);

		// Convertendo o objeto para uma string JSON
		String postData = json.toString();
		// String textoCodificado = new
		// String(postData.getBytes(StandardCharsets.UTF_8), StandardCharsets.UTF_8);

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
		String content = jsonObject.getJSONArray("choices") // Acessa o array "choices"
				.getJSONObject(0) // Pega o primeiro objeto do array
				.getJSONObject("message") // Pega o objeto "message"
				.getString("content"); // Pega o valor do campo "content"

		// Imprimir o valor de "content"
		System.out.println("Conteúdo da mensagem: " + content);
		
		JSONObject resposta = new JSONObject();
		resposta.put("role", "assistant");
		resposta.put("content", content);
		mensagens.put(resposta);

		return content;
	}
}

