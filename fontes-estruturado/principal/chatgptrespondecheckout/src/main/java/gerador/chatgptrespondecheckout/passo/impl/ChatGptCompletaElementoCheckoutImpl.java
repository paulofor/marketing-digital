package gerador.chatgptrespondecheckout.passo.impl;


import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Properties;

import org.json.JSONArray;
import org.json.JSONObject;

import br.com.gersis.loopback.modelo.ElementoCheckoutProduto;
import br.com.gersis.loopback.modelo.ElementoPaginaCheckout;
import br.com.gersis.loopback.modelo.EntregavelCapitulo;
import br.com.gersis.loopback.modelo.EntregavelProduto;
import br.com.gersis.loopback.modelo.ProdutoProprio;
import gerador.chatgptrespondecheckout.passo.ChatGptCompletaElementoCheckout;



public class ChatGptCompletaElementoCheckoutImpl extends ChatGptCompletaElementoCheckout {

	private JSONArray mensagens = new JSONArray();
	
	@Override
	protected boolean executaCustom(ElementoPaginaCheckout elementoCorrente, ProdutoProprio produto) {
		try {
			mensagens = new JSONArray();
			String saida = acessaChatGpt(elementoCorrente, produto);
			this.saidaResposta = new ElementoCheckoutProduto();
			this.saidaResposta.setProdutoProprioId(produto.getIdInteger());
			this.saidaResposta.setElementoPaginaCheckoutId(elementoCorrente.getIdInteger());
			this.saidaResposta.setTexto(saida);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	} 


	private String acessaChatGpt(ElementoPaginaCheckout elementoCorrente, ProdutoProprio produto) throws Exception {

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

		String textoBase = "Você é um especialista em vendas e copywriter. Usando como base campanhas de produtos digitais de grande sucesso recente" +
			". Tomando como base o público-alvo: " + produto.getMercadoPotencial().getDescricao() + 
			"  Para esse produto: " + this.textoProduto(produto);
		
		System.out.println("Produto:");
		System.out.println(this.textoProduto(produto));
			
		String texto = "Gere o texto que o publico se identifique e seja persuasivo completando as lacunas: "   +
				elementoCorrente.getPromptBasico();
				
		JSONObject system = new JSONObject();
		system.put("role", "system");
		system.put("content", textoBase);
		mensagens.put(system);

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
	
	private String textoProduto(ProdutoProprio produto) {
		String saida = "" + produto.getNome();
		for (EntregavelProduto entregavel : produto.getEntregavelProdutos()) {
			saida += " Ebook: (" + entregavel.getNome() ;
			//for (EntregavelCapitulo capitulo : entregavel.getEntregavelCapitulos()) {
			//	saida += " Capitulo: " + capitulo.getNome() + " , ";
			//}
			saida += " ) ";
		}
		return saida;
	}
}

