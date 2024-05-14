package gerador.geraimagemconteudoproduto.passo.impl;


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

import br.com.gersis.loopback.modelo.ConteudoProdutoKiwify;
import br.com.gersis.loopback.modelo.ImagemConteudo;
import br.com.gersis.loopback.modelo.ItemConteudoProduto;
import br.com.gersis.loopback.modelo.PromptImagemConteudo;
import gerador.geraimagemconteudoproduto.passo.AcessaDalle;



public class AcessaDalleImpl extends AcessaDalle {

	@Override
	protected boolean executaCustom(ConteudoProdutoKiwify conteudoCorrente) {
		String prompt = "";
		int idPrompt = 0;
		if (conteudoCorrente.getEntregavelProduto().getPromptImagemConteudos().size()==0) {
			prompt = conteudoCorrente.getPromptIndividual1();
		} else {
			PromptImagemConteudo promptObj = conteudoCorrente.getEntregavelProduto().getPromptImagemConteudos().get(0);
			prompt = this.obtemPrompt(promptObj,conteudoCorrente);
			idPrompt = promptObj.getIdInteger();
		}
		try {
			JSONObject resultado = fazerRequisicao(prompt);
			JSONArray data = resultado.getJSONArray("data");
			JSONObject json = data.getJSONObject(0);
			String url = json.getString("url");
			String texto = json.getString("revised_prompt");
			ImagemConteudo imagem = new ImagemConteudo();
			imagem.setUrlOriginal(url);
			imagem.setPromptRevisado(texto);
			imagem.setPromptImagemConteudoId(idPrompt);
			imagem.setConteudoProdutoKiwifyId(conteudoCorrente.getIdInteger());
			this.saidaImagemNova = imagem;
			Thread.sleep(5000);
			return true;
		} catch (Exception e) {
			e.getMessage();
			return false;
		}
	} 

	
	private String obtemPrompt(PromptImagemConteudo promptObj, ConteudoProdutoKiwify conteudoCorrente) {
		String prompt = promptObj.getPrompt();
		prompt = prompt.replaceAll("---nome---", conteudoCorrente.getNome());
		prompt = prompt.replaceAll("---subNome---", conteudoCorrente.getSubNome());
		for (ItemConteudoProduto item : conteudoCorrente.getItemConteudoProdutos()) {
			String palavra = item.getPromptItem().getCodigoReplace();
			String texto = item.getTexto();
			prompt = prompt.replaceAll("---" + palavra + "---", texto);
		}
		return prompt;
		
	}

	private JSONObject fazerRequisicao(String prompt) throws Exception {
		try {
			Properties prop = new Properties();
			String path = "/etc/openai/config.properties"; // Substitua pelo seu caminho
			FileInputStream input = new FileInputStream(path);
			prop.load(input);

			// Obtenha a api_key
			String apiKey = prop.getProperty("api_key");

			String endpoint = "https://api.openai.com/v1/images/generations";

			URL url = new URL(endpoint);
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("POST");
			con.setRequestProperty("Content-Type", "application/json");
			con.setRequestProperty("Authorization", "Bearer " + apiKey);
			con.setDoOutput(true);
			
			String dimensao = "1024x1024";

			String postData = "{ \"model\" :  \"dall-e-3\", \"prompt\": \""
					+ URLEncoder.encode(prompt, "UTF-8") + "\", \"n\": " + 1 + ", \"size\": \""
					+ dimensao + "\" , " + " \"style\" : \"vivid\" }";

			/*
			 * String postData = "{ \"model\" :  \"dall-e-3\", \"prompt\": \"" +
			 * solicitacao.getPrompt() + "\", \"n\": " + 1 + ", \"size\": \"" +
			 * solicitacao.getDimensao() + "\" }";
			 */
			System.out.println(postData);

			DataOutputStream wr = new DataOutputStream(con.getOutputStream());
			wr.writeBytes(postData);
			wr.flush();
			wr.close();

			int responseCode = con.getResponseCode();

			if (responseCode == HttpURLConnection.HTTP_OK) {
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
				String inputLine;
				StringBuilder response = new StringBuilder();

				while ((inputLine = in.readLine()) != null) {
					response.append(inputLine);
				}
				in.close();

				JSONObject saida = new JSONObject(response.toString());
				return saida;
			} else {
				// Exibir o corpo da resposta em caso de erro
				BufferedReader errorIn = new BufferedReader(new InputStreamReader(con.getErrorStream()));
				String errorInputLine;
				StringBuilder errorResponse = new StringBuilder();

				while ((errorInputLine = errorIn.readLine()) != null) {
					errorResponse.append(errorInputLine);
				}
				errorIn.close();

				System.out.println("Erro na requisição. Código de resposta: " + responseCode);
				System.out.println("Corpo da resposta de erro: " + errorResponse.toString());

				throw new Exception("Erro na requisição. Código de resposta: " + responseCode);
			}
		} catch (Exception e) {
			throw e;
		}
	}

}

