package gerador.chatgptgeraentregavelcapitulo.passo.impl;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Properties;
import java.util.Random;

import org.json.JSONArray;
import org.json.JSONObject;

import br.com.gersis.loopback.modelo.EntregavelCapitulo;
import br.com.gersis.loopback.modelo.EntregavelProduto;
import gerador.chatgptgeraentregavelcapitulo.passo.ChatGptCriaCapitulos;

public class ChatGptCriaCapitulosImpl extends ChatGptCriaCapitulos {

	private String promptDefinicao = null;

	@Override
	protected boolean executaCustom(EntregavelProduto entregavelCorrente) {
		try {
			String resposta = this.acessaChatGpt(entregavelCorrente);
			// Identifica os limites do array JSON
			int startIndex = resposta.indexOf("[");
			int endIndex = resposta.lastIndexOf("]");
			saidaListaCapitulo = new ArrayList<EntregavelCapitulo>();
			if (startIndex != -1 && endIndex != -1 && startIndex < endIndex) {
				String jsonArrayString = resposta.substring(startIndex, endIndex + 1);
				JSONArray jsonArray = new JSONArray(jsonArrayString);

				// Loop para iterar no JSONArray
				for (int i = 0; i < jsonArray.length(); i++) {
					JSONObject jsonObject = jsonArray.getJSONObject(i);
					System.out.println("Elemento " + i + ": " + jsonObject.toString());
					EntregavelCapitulo novo = new EntregavelCapitulo();
					novo.setNumero(i + 1);
					novo.setNome(jsonObject.getString("capitulo"));
					novo.setDescricao(jsonObject.getString("descricao"));
					novo.setEntregavelProdutoId(entregavelCorrente.getIdInteger());
					this.saidaListaCapitulo.add(novo);
				}
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return true;
	}

	private String acessaChatGpt(EntregavelProduto entregavelCorrente) throws Exception {

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

		// String postData = "{ \"model\" : \"gpt-3.5-turbo-instruct\", \"prompt\": \""
		// + prompt
		// + "\", \"max_tokens\": " + maxTokens + ", \"temperature\": " + temperature +
		// " }";

		String areas = "Financeiro, Vendas, Marketing, Juridico, Tecnologia, Parcerias";

		String texto = "Gere " + this.generateRandomInt(6, 9) + "  capítulos para o ebook " + entregavelCorrente.getNome() + " - "
				+ entregavelCorrente.getDescricao() + "."
				+ "Precisam ser objetivos e eficazes para resolver os problemas do público alvo. "
				+ "Precisa ser atraente para despertar desejo e curiosidade para a leitura. "
				+ "Responda em formato json [{'capitulo' : '', 'descricao':''}]"
				+ "No campo capitulo não coloque o número do capítulos ";

		this.promptDefinicao = texto;

		JSONArray mensagens = new JSONArray();

		JSONObject pergunta = new JSONObject();
		pergunta.put("role", "user");
		pergunta.put("content", texto);
		mensagens.put(pergunta);

		// Criando o objeto JSON
		JSONObject json = new JSONObject();
		json.put("model", "o1-preview");
		// json.put("model", "gpt-4o");

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

		return content;
	}

	private int generateRandomInt(int min, int max) {
		if (min > max) {
			throw new IllegalArgumentException("O valor mínimo não pode ser maior que o valor máximo.");
		}
		Random random = new Random();
		return random.nextInt((max - min) + 1) + min;
	}
}
