package gerador.chatgptgeraentregavel.passo.impl;

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

import br.com.gersis.loopback.modelo.EntregavelProduto;
import br.com.gersis.loopback.modelo.ProdutoProprio;
import gerador.chatgptgeraentregavel.passo.ChatGptGeraListaEntregavel;

public class ChatGptGeraListaEntregavelImpl extends ChatGptGeraListaEntregavel {

	private String promptDefinicao = null;

	@Override
	protected boolean executaCustom(ProdutoProprio produto) {
		try {
			String resposta = this.acessaChatGpt(produto);
			// Identifica os limites do array JSON
			int startIndex = resposta.indexOf("[");
			int endIndex = resposta.lastIndexOf("]");
			saidaListaEntregavel = new ArrayList<EntregavelProduto>();
			if (startIndex != -1 && endIndex != -1 && startIndex < endIndex) {
				String jsonArrayString = resposta.substring(startIndex, endIndex + 1);
				JSONArray jsonArray = new JSONArray(jsonArrayString);

				// Loop para iterar no JSONArray
				for (int i = 0; i < jsonArray.length(); i++) {
					JSONObject jsonObject = jsonArray.getJSONObject(i);
					System.out.println("Elemento " + i + ": " + jsonObject.toString());
					EntregavelProduto novo = new EntregavelProduto();
					novo.setPromptDefinicao(promptDefinicao);
					novo.setArea(jsonObject.getString("area"));
					novo.setNome(jsonObject.getString("titulo"));
					novo.setDescricao(jsonObject.getString("descricao"));
					novo.setProdutoProprioId(produto.getIdInteger());
					novo.setGeraEbook(1);
					this.saidaListaEntregavel.add(novo);
				}
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return true;
	}

	private String acessaChatGpt(ProdutoProprio produto) throws Exception {

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

		String texto = "Gere 10 ebook que seriam fundamentais para o publico-alvo, que sejam práticos e de ação objetiva no dia a dia. Com facilidade de vendas. Precisa ser títulos diretos de entendimento fácil despertando o desejo de compra. Utilize como base essas áreas: "
				+ areas
				+ " e depois para cada área pelo menos um produto. Note que serão ebooks com foco em texto. Deverão abordar diferentes áreas e promover transformação pelo conhecimento em que fizer a leitura. "
				+ produto.getDescricaoPublicoAlvo().getResposta()
				+ "Responda em formato json [{'area' : '', 'titulo':'' , 'descricao':''}]";

		this.promptDefinicao = texto;

		JSONArray mensagens = this.obtemMensagensAnteriores();

		JSONObject pergunta = new JSONObject();
		pergunta.put("role", "user");
		pergunta.put("content", texto);
		mensagens.put(pergunta);

		// Criando o objeto JSON
		JSONObject json = new JSONObject();
		json.put("model", "o1-preview");
		//json.put("model", "gpt-4o");

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

	private JSONArray obtemMensagensAnteriores() {
		JSONArray mensagens = new JSONArray();

		JSONObject pergunta = new JSONObject();
		pergunta.put("role", "user");
		pergunta.put("content", "quais são os 10 produtos mais vendidos do ano no clickbank ?");
		mensagens.put(pergunta);

		JSONObject resposta = new JSONObject();
		pergunta.put("role", "assistant");
		pergunta.put("content",
				"Aqui estão os 10 infoprodutos mais vendidos no ClickBank em 2024, acompanhados de seus públicos-alvo e promessas:\n"
						+ "\n" + "1. **The Genius Wave**\n"
						+ "   - **Público-alvo**: Indivíduos interessados em aprimorar suas capacidades cognitivas, como estudantes, profissionais e pessoas que buscam desenvolvimento pessoal.\n"
						+ "   - **Promessa**: Utilizar tecnologia de ondas sonoras para melhorar funções cerebrais, como memória, foco e criatividade.\n"
						+ "\n" + "2. **Rocket Languages**\n"
						+ "   - **Público-alvo**: Pessoas que desejam aprender um novo idioma, incluindo viajantes, profissionais que buscam oportunidades internacionais e entusiastas de línguas.\n"
						+ "   - **Promessa**: Oferecer cursos online interativos que facilitam o aprendizado de idiomas como espanhol, francês, italiano e alemão.\n"
						+ "\n" + "3. **Eat Stop Eat**\n"
						+ "   - **Público-alvo**: Indivíduos interessados em perda de peso e saúde, especialmente aqueles curiosos sobre jejum intermitente.\n"
						+ "   - **Promessa**: Apresentar um método de emagrecimento baseado no jejum intermitente para promover perda de peso e melhorar a saúde geral.\n"
						+ "\n" + "4. **The Money Wave**\n"
						+ "   - **Público-alvo**: Pessoas buscando melhorar sua situação financeira, incluindo profissionais, empreendedores e indivíduos interessados em desenvolvimento pessoal.\n"
						+ "   - **Promessa**: Utilizar tecnologias sonoras para desbloquear o potencial financeiro dos usuários, atraindo prosperidade e sucesso.\n"
						+ "\n" + "5. **Ted’s Woodworking**\n"
						+ "   - **Público-alvo**: Entusiastas de marcenaria, desde iniciantes até profissionais, interessados em projetos detalhados e instruções passo a passo.\n"
						+ "   - **Promessa**: Fornecer uma extensa coleção de planos de marcenaria com milhares de projetos detalhados para todos os níveis de habilidade.\n"
						+ "\n" + "6. **Lost Book of Remedies**\n"
						+ "   - **Público-alvo**: Pessoas interessadas em medicina natural, remédios caseiros e práticas de cura tradicionais.\n"
						+ "   - **Promessa**: Compilar conhecimentos sobre plantas medicinais e seus usos terapêuticos tradicionais para tratamentos naturais.\n"
						+ "\n" + "7. **Pelvic Floor Strong**\n"
						+ "   - **Público-alvo**: Mulheres preocupadas com a saúde do assoalho pélvico, especialmente aquelas que enfrentam problemas como incontinência urinária ou pós-parto.\n"
						+ "   - **Promessa**: Oferecer um programa focado no fortalecimento do assoalho pélvico para melhorar a saúde urinária e a qualidade de vida.\n"
						+ "\n" + "8. **Back to Life**\n"
						+ "   - **Público-alvo**: Indivíduos que sofrem de dores nas costas ou desejam melhorar a postura e a saúde da coluna vertebral.\n"
						+ "   - **Promessa**: Apresentar um sistema de exercícios projetado para aliviar dores nas costas e melhorar a postura.\n"
						+ "\n" + "9. **Numerologist**\n"
						+ "   - **Público-alvo**: Pessoas interessadas em numerologia, autoconhecimento e previsões pessoais.\n"
						+ "   - **Promessa**: Fornecer relatórios personalizados de numerologia que oferecem insights sobre a vida e o futuro dos usuários.\n"
						+ "\n" + "10. **Venus Factor System**\n"
						+ "    - **Público-alvo**: Mulheres que buscam perder peso e melhorar a forma física, especialmente aquelas que procuram programas específicos para o público feminino.\n"
						+ "    - **Promessa**: Oferecer um programa de perda de peso desenvolvido especificamente para mulheres, focando em técnicas de emagrecimento eficazes.\n"
						+ "\n"
						+ "Esses infoprodutos atendem a diversos interesses, desde desenvolvimento pessoal e saúde até hobbies e aprendizado de novas habilidades, cada um com promessas alinhadas às necessidades de seus públicos-alvo. ");
		mensagens.put(pergunta);

		//
		pergunta = new JSONObject();
		pergunta.put("role", "user");
		pergunta.put("content", "me de 10 somente de infoprodutos");
		resposta = new JSONObject();
		resposta.put("role", "assistant");
		resposta.put("content", "Aqui estão 10 dos infoprodutos mais vendidos no ClickBank em 2024:\n" + "\n"
				+ "1. **The Genius Wave**: Produto digital que utiliza tecnologia de ondas sonoras para aprimorar as capacidades cognitivas dos usuários. \n"
				+ "\n"
				+ "2. **Rocket Languages**: Cursos online de idiomas, incluindo espanhol, francês, italiano e alemão, projetados para facilitar o aprendizado de novas línguas. \n"
				+ "\n"
				+ "3. **Eat Stop Eat**: Programa de emagrecimento que aborda o jejum intermitente como método para perda de peso e melhoria da saúde. \n"
				+ "\n"
				+ "4. **The Money Wave**: Produto digital que promete desbloquear o potencial financeiro dos usuários por meio de tecnologias sonoras. \n"
				+ "\n"
				+ "5. **Ted’s Woodworking**: Extensa coleção de planos de marcenaria, oferecendo milhares de projetos detalhados para entusiastas e profissionais. \n"
				+ "\n"
				+ "6. **Lost Book of Remedies**: Guia que compila conhecimentos sobre plantas medicinais e seus usos terapêuticos tradicionais. \n"
				+ "\n"
				+ "7. **Pelvic Floor Strong**: Programa voltado para mulheres, focado no fortalecimento do assoalho pélvico e na saúde urinária. \n"
				+ "\n"
				+ "8. **Back to Life**: Sistema de exercícios projetado para aliviar dores nas costas e melhorar a postura. \n"
				+ "\n"
				+ "9. **Numerologist**: Relatórios personalizados de numerologia que fornecem insights sobre a vida e o futuro dos usuários. \n"
				+ "\n"
				+ "10. **Venus Factor System**: Programa de perda de peso especificamente desenvolvido para mulheres, focando em técnicas de emagrecimento eficazes. \n"
				+ "\n"
				+ "Esses infoprodutos destacaram-se no ClickBank em 2024, abrangendo áreas como desenvolvimento pessoal, saúde, hobbies e aprendizado de idiomas. ");
		mensagens.put(pergunta);
		mensagens.put(resposta);
		//

		//
		pergunta = new JSONObject();
		pergunta.put("role", "user");
		pergunta.put("content", "qual o publico alvo de cada um deles ? e qual a promessa de cada um ?");
		resposta = new JSONObject();
		resposta.put("role", "assistant");
		resposta.put("content",
				"Aqui estão os 10 infoprodutos mais vendidos no ClickBank em 2024, acompanhados de seus públicos-alvo e promessas:\n"
						+ "\n" + "1. **The Genius Wave**\n"
						+ "   - **Público-alvo**: Indivíduos interessados em aprimorar suas capacidades cognitivas, como estudantes, profissionais e pessoas que buscam desenvolvimento pessoal.\n"
						+ "   - **Promessa**: Utilizar tecnologia de ondas sonoras para melhorar funções cerebrais, como memória, foco e criatividade.\n"
						+ "\n" + "2. **Rocket Languages**\n"
						+ "   - **Público-alvo**: Pessoas que desejam aprender um novo idioma, incluindo viajantes, profissionais que buscam oportunidades internacionais e entusiastas de línguas.\n"
						+ "   - **Promessa**: Oferecer cursos online interativos que facilitam o aprendizado de idiomas como espanhol, francês, italiano e alemão.\n"
						+ "\n" + "3. **Eat Stop Eat**\n"
						+ "   - **Público-alvo**: Indivíduos interessados em perda de peso e saúde, especialmente aqueles curiosos sobre jejum intermitente.\n"
						+ "   - **Promessa**: Apresentar um método de emagrecimento baseado no jejum intermitente para promover perda de peso e melhorar a saúde geral.\n"
						+ "\n" + "4. **The Money Wave**\n"
						+ "   - **Público-alvo**: Pessoas buscando melhorar sua situação financeira, incluindo profissionais, empreendedores e indivíduos interessados em desenvolvimento pessoal.\n"
						+ "   - **Promessa**: Utilizar tecnologias sonoras para desbloquear o potencial financeiro dos usuários, atraindo prosperidade e sucesso.\n"
						+ "\n" + "5. **Ted’s Woodworking**\n"
						+ "   - **Público-alvo**: Entusiastas de marcenaria, desde iniciantes até profissionais, interessados em projetos detalhados e instruções passo a passo.\n"
						+ "   - **Promessa**: Fornecer uma extensa coleção de planos de marcenaria com milhares de projetos detalhados para todos os níveis de habilidade.\n"
						+ "\n" + "6. **Lost Book of Remedies**\n"
						+ "   - **Público-alvo**: Pessoas interessadas em medicina natural, remédios caseiros e práticas de cura tradicionais.\n"
						+ "   - **Promessa**: Compilar conhecimentos sobre plantas medicinais e seus usos terapêuticos tradicionais para tratamentos naturais.\n"
						+ "\n" + "7. **Pelvic Floor Strong**\n"
						+ "   - **Público-alvo**: Mulheres preocupadas com a saúde do assoalho pélvico, especialmente aquelas que enfrentam problemas como incontinência urinária ou pós-parto.\n"
						+ "   - **Promessa**: Oferecer um programa focado no fortalecimento do assoalho pélvico para melhorar a saúde urinária e a qualidade de vida.\n"
						+ "\n" + "8. **Back to Life**\n"
						+ "   - **Público-alvo**: Indivíduos que sofrem de dores nas costas ou desejam melhorar a postura e a saúde da coluna vertebral.\n"
						+ "   - **Promessa**: Apresentar um sistema de exercícios projetado para aliviar dores nas costas e melhorar a postura.\n"
						+ "\n" + "9. **Numerologist**\n"
						+ "   - **Público-alvo**: Pessoas interessadas em numerologia, autoconhecimento e previsões pessoais.\n"
						+ "   - **Promessa**: Fornecer relatórios personalizados de numerologia que oferecem insights sobre a vida e o futuro dos usuários.\n"
						+ "\n" + "10. **Venus Factor System**\n"
						+ "    - **Público-alvo**: Mulheres que buscam perder peso e melhorar a forma física, especialmente aquelas que procuram programas específicos para o público feminino.\n"
						+ "    - **Promessa**: Oferecer um programa de perda de peso desenvolvido especificamente para mulheres, focando em técnicas de emagrecimento eficazes.\n"
						+ "\n"
						+ "Esses infoprodutos atendem a diversos interesses, desde desenvolvimento pessoal e saúde até hobbies e aprendizado de novas habilidades, cada um com promessas alinhadas às necessidades de seus públicos-alvo. ");
		mensagens.put(pergunta);
		mensagens.put(resposta);
		//

		//
		pergunta = new JSONObject();
		pergunta.put("role", "user");
		pergunta.put("content", "como explicar o sucesso de vendas de cada um deles ? como é a oferta ?");
		resposta = new JSONObject();
		resposta.put("role", "assistant");
		resposta.put("content",
				"O sucesso de vendas dos infoprodutos mais vendidos no ClickBank em 2024 pode ser atribuído a uma combinação de estratégias de marketing eficazes, ofertas atraentes e alinhamento preciso com as necessidades e desejos de seus públicos-alvo. A seguir, uma análise de cada produto:\n"
						+ "\n" + "1. **The Genius Wave**\n"
						+ "   - **Oferta**: Tecnologia de ondas sonoras projetada para aprimorar funções cognitivas, como memória e foco.\n"
						+ "   - **Estratégia de Sucesso**: Aproveitamento do crescente interesse em desenvolvimento pessoal e neurociência, utilizando uma proposta inovadora que promete resultados tangíveis.\n"
						+ "\n" + "2. **Rocket Languages**\n"
						+ "   - **Oferta**: Cursos online interativos para aprendizado de novos idiomas.\n"
						+ "   - **Estratégia de Sucesso**: Foco na crescente demanda por aprendizado de idiomas para viagens e oportunidades profissionais, oferecendo flexibilidade e métodos eficazes.\n"
						+ "\n" + "3. **Eat Stop Eat**\n"
						+ "   - **Oferta**: Programa de emagrecimento baseado no jejum intermitente.\n"
						+ "   - **Estratégia de Sucesso**: Capitalização da popularidade do jejum intermitente, fornecendo orientações claras e baseadas em ciência para perda de peso.\n"
						+ "\n" + "4. **The Money Wave**\n"
						+ "   - **Oferta**: Tecnologias sonoras destinadas a desbloquear o potencial financeiro dos usuários.\n"
						+ "   - **Estratégia de Sucesso**: Combinação de desenvolvimento pessoal com promessas de melhoria financeira, atraindo aqueles que buscam prosperidade.\n"
						+ "\n" + "5. **Ted’s Woodworking**\n"
						+ "   - **Oferta**: Coleção de planos detalhados de marcenaria para todos os níveis de habilidade.\n"
						+ "   - **Estratégia de Sucesso**: Atendimento a entusiastas de marcenaria com uma vasta gama de projetos, suprindo a demanda por recursos educacionais práticos.\n"
						+ "\n" + "6. **Lost Book of Remedies**\n"
						+ "   - **Oferta**: Guia sobre plantas medicinais e seus usos terapêuticos tradicionais.\n"
						+ "   - **Estratégia de Sucesso**: Aproveitamento do interesse crescente em medicina natural e alternativas aos tratamentos convencionais.\n"
						+ "\n" + "7. **Pelvic Floor Strong**\n"
						+ "   - **Oferta**: Programa para fortalecimento do assoalho pélvico e melhoria da saúde urinária feminina.\n"
						+ "   - **Estratégia de Sucesso**: Foco em um problema específico de saúde feminina, oferecendo soluções práticas e eficazes.\n"
						+ "\n" + "8. **Back to Life**\n"
						+ "   - **Oferta**: Sistema de exercícios para aliviar dores nas costas e melhorar a postura.\n"
						+ "   - **Estratégia de Sucesso**: Endereçamento de uma questão comum de saúde, proporcionando alívio sem necessidade de intervenções médicas.\n"
						+ "\n" + "9. **Numerologist**\n"
						+ "   - **Oferta**: Relatórios personalizados de numerologia para insights sobre a vida e o futuro.\n"
						+ "   - **Estratégia de Sucesso**: Atração de indivíduos interessados em autoconhecimento e espiritualidade, oferecendo previsões personalizadas.\n"
						+ "\n" + "10. **Venus Factor System**\n"
						+ "    - **Oferta**: Programa de perda de peso desenvolvido especificamente para mulheres.\n"
						+ "    - **Estratégia de Sucesso**: Personalização do programa para o público feminino, abordando necessidades e desafios específicos.\n"
						+ "\n"
						+ "Esses produtos utilizam estratégias de marketing digital, como criação de conteúdo relevante, uso de mídias sociais e parcerias com influenciadores, para alcançar e engajar seus públicos-alvo. Além disso, muitos oferecem materiais promocionais de alta qualidade para afiliados, facilitando a divulgação e aumentando o alcance das ofertas.  ");
		mensagens.put(pergunta);
		mensagens.put(resposta);
		//

		//
		pergunta = new JSONObject();
		pergunta.put("role", "user");
		pergunta.put("content", "qual o ponto principal de atração de cada um deles ? seja bem objetivo na resposta");
		resposta = new JSONObject();
		resposta.put("role", "assistant");
		resposta.put("content",
				"Aqui estão os principais pontos de atração de cada um dos 10 infoprodutos mais vendidos no ClickBank em 2024:\n"
						+ "\n"
						+ "1. **The Genius Wave**: Promete aprimorar as capacidades cognitivas dos usuários por meio de tecnologia de ondas sonoras.\n"
						+ "\n"
						+ "2. **Rocket Languages**: Oferece cursos online interativos que facilitam o aprendizado de novos idiomas de forma prática e eficaz.\n"
						+ "\n"
						+ "3. **Eat Stop Eat**: Apresenta um método de emagrecimento baseado no jejum intermitente, visando perda de peso e melhoria da saúde.\n"
						+ "\n"
						+ "4. **The Money Wave**: Utiliza tecnologias sonoras para desbloquear o potencial financeiro dos usuários, atraindo prosperidade.\n"
						+ "\n"
						+ "5. **Ted’s Woodworking**: Fornece uma extensa coleção de planos de marcenaria detalhados, atendendo desde iniciantes até profissionais.\n"
						+ "\n"
						+ "6. **Lost Book of Remedies**: Compila conhecimentos sobre plantas medicinais e seus usos terapêuticos tradicionais, voltado para entusiastas de medicina natural.\n"
						+ "\n"
						+ "7. **Pelvic Floor Strong**: Foca no fortalecimento do assoalho pélvico feminino, oferecendo soluções para melhorar a saúde urinária.\n"
						+ "\n"
						+ "8. **Back to Life**: Apresenta um sistema de exercícios destinado a aliviar dores nas costas e melhorar a postura.\n"
						+ "\n"
						+ "9. **Numerologist**: Fornece relatórios personalizados de numerologia, oferecendo insights sobre a vida e o futuro dos usuários.\n"
						+ "\n"
						+ "10. **Venus Factor System**: Oferece um programa de perda de peso desenvolvido especificamente para mulheres, com técnicas de emagrecimento eficazes.\n"
						+ "\n"
						+ "Esses produtos atraem seus públicos-alvo ao oferecer soluções específicas para necessidades e interesses distintos, desde desenvolvimento pessoal e saúde até hobbies e aprendizado de novas habilidades. ");
		mensagens.put(pergunta);
		mensagens.put(resposta);
		//

		//
		pergunta = new JSONObject();
		pergunta.put("role", "user");
		pergunta.put("content", "mas assim não convence da compra. o que atua no convecimento ?");
		resposta = new JSONObject();
		resposta.put("role", "assistant");
		resposta.put("content",
				"O que atua no convencimento de compra dos produtos são os **gatilhos mentais** e estratégias de marketing que tocam nas emoções, necessidades e desejos do público-alvo. Veja como cada produto utiliza isso:\n"
						+ "\n" + "### **1. The Genius Wave**\n" + "   - **Gatilho**: Exclusividade e curiosidade.\n"
						+ "   - **Convencimento**: A ideia de usar tecnologia avançada e pouco conhecida para melhorar a mente cria curiosidade e sensação de acesso privilegiado.\n"
						+ "\n" + "### **2. Rocket Languages**\n" + "   - **Gatilho**: Prova social e praticidade.\n"
						+ "   - **Convencimento**: Testemunhos de usuários bem-sucedidos e a possibilidade de aprender no seu ritmo com métodos interativos convence quem busca eficiência.\n"
						+ "\n" + "### **3. Eat Stop Eat**\n" + "   - **Gatilho**: Simplicidade e autoridade.\n"
						+ "   - **Convencimento**: Promessa de emagrecimento sem dietas complexas, com base em estudos sobre jejum intermitente, dá credibilidade e atrai quem deseja resultados sem complicações.\n"
						+ "\n" + "### **4. The Money Wave**\n" + "   - **Gatilho**: Esperança e recompensa futura.\n"
						+ "   - **Convencimento**: Apelo a sonhos financeiros e a promessa de métodos fáceis para atrair dinheiro cria conexão emocional com quem busca soluções rápidas.\n"
						+ "\n" + "### **5. Ted’s Woodworking**\n"
						+ "   - **Gatilho**: Completude e benefício imediato.\n"
						+ "   - **Convencimento**: A oferta de \"tudo em um\" (16.000 planos) resolve o problema de quem busca recursos de qualidade sem gastar tempo em pesquisa.\n"
						+ "\n" + "### **6. Lost Book of Remedies**\n" + "   - **Gatilho**: Nostalgia e segurança.\n"
						+ "   - **Convencimento**: Promove o retorno às práticas naturais e confiáveis de cura, com apelo à insatisfação com a medicina moderna.\n"
						+ "\n" + "### **7. Pelvic Floor Strong**\n"
						+ "   - **Gatilho**: Transformação e especificidade.\n"
						+ "   - **Convencimento**: Foco em uma solução prática para um problema íntimo e específico (saúde do assoalho pélvico), transmitindo confiança para quem precisa de mudanças reais.\n"
						+ "\n" + "### **8. Back to Life**\n" + "   - **Gatilho**: Alívio rápido e acessibilidade.\n"
						+ "   - **Convencimento**: A promessa de aliviar dores nas costas sem médicos ou cirurgias é um atrativo poderoso para quem busca resultados rápidos e econômicos.\n"
						+ "\n" + "### **9. Numerologist**\n" + "   - **Gatilho**: Personalização e mistério.\n"
						+ "   - **Convencimento**: A ideia de relatórios únicos e insights sobre o futuro cria uma conexão emocional forte, tocando no desejo de autodescoberta e controle da vida.\n"
						+ "\n" + "### **10. Venus Factor System**\n" + "   - **Gatilho**: Exclusividade e empatia.\n"
						+ "   - **Convencimento**: Ser direcionado exclusivamente para mulheres gera confiança e identificação, enquanto os resultados prometidos apelam para o desejo de transformação física.\n"
						+ "\n" + "---\n" + "\n" + "### **Elementos que Potencializam o Convencimento:**\n"
						+ "- **Autoridade**: Relatórios de especialistas ou respaldo científico (real ou aparente).\n"
						+ "- **Prova Social**: Testemunhos, histórias de sucesso e número de usuários.\n"
						+ "- **Garantia**: Política de reembolso que reduz o risco percebido.\n"
						+ "- **Urência**: Promoções limitadas no tempo ou ofertas exclusivas.\n" + "\n"
						+ "O convencimento não está apenas no benefício do produto, mas em como ele é apresentado como **único, essencial e transformador**.");
		mensagens.put(pergunta);
		mensagens.put(resposta);
		//
		/*
		 * // pergunta = new JSONObject(); pergunta.put("role", "user");
		 * pergunta.put("content", ""); resposta = new JSONObject();
		 * resposta.put("role", "assistant"); resposta.put("content", "");
		 * mensagens.put(pergunta); mensagens.put(resposta); //
		 * 
		 * // pergunta = new JSONObject(); pergunta.put("role", "user");
		 * pergunta.put("content", ""); resposta = new JSONObject();
		 * resposta.put("role", "assistant"); resposta.put("content", "");
		 * mensagens.put(pergunta); mensagens.put(resposta); //
		 * 
		 * // pergunta = new JSONObject(); pergunta.put("role", "user");
		 * pergunta.put("content", ""); resposta = new JSONObject();
		 * resposta.put("role", "assistant"); resposta.put("content", "");
		 * mensagens.put(pergunta); mensagens.put(resposta); //
		 * 
		 * // pergunta = new JSONObject(); pergunta.put("role", "user");
		 * pergunta.put("content", ""); resposta = new JSONObject();
		 * resposta.put("role", "assistant"); resposta.put("content", "");
		 * mensagens.put(pergunta); mensagens.put(resposta); //
		 * 
		 * // pergunta = new JSONObject(); pergunta.put("role", "user");
		 * pergunta.put("content", ""); resposta = new JSONObject();
		 * resposta.put("role", "assistant"); resposta.put("content", "");
		 * mensagens.put(pergunta); mensagens.put(resposta); //
		 * 
		 * // pergunta = new JSONObject(); pergunta.put("role", "user");
		 * pergunta.put("content", ""); resposta = new JSONObject();
		 * resposta.put("role", "assistant"); resposta.put("content", "");
		 * mensagens.put(pergunta); mensagens.put(resposta); //
		 * 
		 * // pergunta = new JSONObject(); pergunta.put("role", "user");
		 * pergunta.put("content", ""); resposta = new JSONObject();
		 * resposta.put("role", "assistant"); resposta.put("content", "");
		 * mensagens.put(pergunta); mensagens.put(resposta); //
		 * 
		 * // pergunta = new JSONObject(); pergunta.put("role", "user");
		 * pergunta.put("content", ""); resposta = new JSONObject();
		 * resposta.put("role", "assistant"); resposta.put("content", "");
		 * mensagens.put(pergunta); mensagens.put(resposta); //
		 * 
		 * // pergunta = new JSONObject(); pergunta.put("role", "user");
		 * pergunta.put("content", ""); resposta = new JSONObject();
		 * resposta.put("role", "assistant"); resposta.put("content", "");
		 * mensagens.put(pergunta); mensagens.put(resposta); //
		 */

		return mensagens;

	}

	

}
