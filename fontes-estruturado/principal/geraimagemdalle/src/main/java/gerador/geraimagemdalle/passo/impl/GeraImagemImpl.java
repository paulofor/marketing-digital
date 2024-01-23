package gerador.geraimagemdalle.passo.impl;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Properties;

import org.json.JSONArray;
import org.json.JSONObject;

import br.com.gersis.loopback.modelo.DalleSolicitacaoImagem;
import br.com.gersis.loopback.modelo.ImagemPaginaVenda;
import gerador.geraimagemdalle.passo.GeraImagem;

public class GeraImagemImpl extends GeraImagem {

	/*
	 * Request body
	 * 
	 * prompt string Required A text description of the desired image(s). The
	 * maximum length is 1000 characters for dall-e-2 and 4000 characters for
	 * dall-e-3.
	 * 
	 * model string Optional Defaults to dall-e-2 The model to use for image
	 * generation.
	 * 
	 * n integer or null Optional Defaults to 1 The number of images to generate.
	 * Must be between 1 and 10. For dall-e-3, only n=1 is supported.
	 * 
	 * quality string Optional Defaults to standard The quality of the image that
	 * will be generated. hd creates images with finer details and greater
	 * consistency across the image. This param is only supported for dall-e-3.
	 * 
	 * response_format string or null Optional Defaults to url The format in which
	 * the generated images are returned. Must be one of url or b64_json.
	 * 
	 * size string or null Optional Defaults to 1024x1024 The size of the generated
	 * images. Must be one of 256x256, 512x512, or 1024x1024 for dall-e-2. Must be
	 * one of 1024x1024, 1792x1024, or 1024x1792 for dall-e-3 models.
	 * 
	 * style string or null Optional Defaults to vivid The style of the generated
	 * images. Must be one of vivid or natural. Vivid causes the model to lean
	 * towards generating hyper-real and dramatic images. Natural causes the model
	 * to produce more natural, less hyper-real looking images. This param is only
	 * supported for dall-e-3.
	 * 
	 * user string Optional A unique identifier representing your end-user, which
	 * can help OpenAI to monitor and detect abuse. Learn more.
	 */

	@Override
	protected boolean executaCustom(DalleSolicitacaoImagem solicitacaoCorrente) {

		saidaListaImagem = new ArrayList<ImagemPaginaVenda>();
		for (int i = 0; i < solicitacaoCorrente.getQuantidadeImagem(); i++) {
			try {
				JSONObject resultado = fazerRequisicao(solicitacaoCorrente);
				JSONArray data = resultado.getJSONArray("data");
				JSONObject json = data.getJSONObject(0);
				String url = json.getString("url");
				String texto = json.getString("revised_prompt");
				ImagemPaginaVenda imagem = new ImagemPaginaVenda();
				imagem.setUrlOriginal(url);
				imagem.setPromptRevisado(texto);
				imagem.setDalleSolicitacaoImagemId(solicitacaoCorrente.getIdInteger());
				imagem.setHotmartId(solicitacaoCorrente.getHotmartId());
				this.saidaListaImagem.add(imagem);
				Thread.sleep(5000);
			} catch (Exception e) {
				e.getMessage();
			}
		}
		return true;
	}

	private JSONObject fazerRequisicao(DalleSolicitacaoImagem solicitacao) throws Exception {
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
					+ URLEncoder.encode(solicitacao.getPrompt(), "UTF-8") + "\", \"n\": " + 1 + ", \"size\": \""
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
