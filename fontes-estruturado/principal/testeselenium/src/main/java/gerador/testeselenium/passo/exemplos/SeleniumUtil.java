package gerador.testeselenium.passo.exemplos;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class SeleniumUtil {

	private String url;
	private String arquivoHtml;
	private String arquivoTexto;
	private String arquivoStyle;

	private String conteudoHtml;
	private String conteudoTexto;

	private List<ItemStyle> listaEstilo = new ArrayList<ItemStyle>();
	private int contId = 0;
	
	public void executa() {
		try {

			conteudoTexto = "";

			System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver");

			// Configurar as opções do Chrome para simular um dispositivo móvel
			ChromeOptions chromeOptions = new ChromeOptions();
			chromeOptions.addArguments("--window-size=360,640"); // Defina as dimensões da tela do dispositivo móvel
			chromeOptions.addArguments(
					"--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1"); // Defina
																																														// o
																																														// user-agent
																																														// para
																																														// um
																																														// dispositivo
																																														// móvel

			// Inicializar o WebDriver com as opções configuradas
			WebDriver driver = new ChromeDriver(chromeOptions);
			// WebDriver driver = new ChromeDriver();

			driver.get(getUrl());

			// Body
			WebElement bodyElement = driver.findElement(By.tagName("body"));

			this.scrollAteOFinalDaPagina(driver);
			this.trataItem(bodyElement, driver);
			this.limpaItem(bodyElement, driver);
			
			
			/*
			 * String uniqueStyles = (String) ((JavascriptExecutor) driver).executeScript(
			 * "var output = '';" +
			 * "var elementStyles = window.getComputedStyle(arguments[0]);" +
			 * "var parentStyles = window.getComputedStyle(arguments[0].parentNode);" +
			 * "var excludedProperties = [" + "   'block-size', 'height', 'inline-size'," +
			 * "   'margin-block-end', 'margin-block-start', 'margin-bottom', 'margin-inline-end',"
			 * + "   'margin-inline-start', 'margin-left', 'margin-right', 'margin-top'," +
			 * "   'perspective-origin', 'transform-origin', 'width'" + "];" +
			 * "for (const prop of elementStyles) {" + "   if (" +
			 * "       elementStyles.getPropertyValue(prop) !== parentStyles.getPropertyValue(prop) &&"
			 * + "       !excludedProperties.includes(prop)" + "   ) {" +
			 * "       output += prop + ': ' + elementStyles.getPropertyValue(prop) + '; ';"
			 * + "   }" + "}" + "return output;", bodyElement);
			 * 
			 * System.out.println("Estilos do elemento (sem propriedades excluídas): " +
			 * uniqueStyles);
			 * 
			 * ((JavascriptExecutor)
			 * driver).executeScript("arguments[0].removeAttribute('class');", bodyElement);
			 * ((JavascriptExecutor)
			 * driver).executeScript("arguments[0].setAttribute('style', '" + uniqueStyles +
			 * "');", bodyElement);
			 * 
			 */

			this.conteudoHtml = bodyElement.getAttribute("outerHTML");

			driver.quit();

			if (this.arquivoHtml != null) {
				conteudoHtml = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Exemplo</title><link rel=\"stylesheet\" href=\"styles.css\"></head>" + 
						conteudoHtml + "</html>";
				this.gravaArquivo(arquivoHtml, conteudoHtml);
			}
			if (this.arquivoTexto != null) {
				this.gravaArquivo(arquivoTexto, conteudoTexto);
			}

			this.gravaArquivoStyle(arquivoStyle);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private void limpaItem(WebElement item, WebDriver driver) {
		if (item.getTagName().equalsIgnoreCase("script") || item.getTagName().equalsIgnoreCase("style") || item.getTagName().equalsIgnoreCase("link")) {
			((JavascriptExecutor) driver).executeScript("arguments[0].remove();", item);
			return;
		}
		((JavascriptExecutor) driver).executeScript(
			    "function removeDataAttributes(element) {" +
			            "    var attributes = element.attributes;" +
			            "    for (var i = 0; i < attributes.length; i++) {" +
			            "        if (attributes[i].name.startsWith('data') || attributes[i].name.startsWith('class') ) {" +
			            "            element.removeAttribute(attributes[i].name);" +
			            "            i--;" + // Decrementa para lidar com a mudança no comprimento da lista de atributos
			            "        }" +
			            "    }" +
			            "}" +
			            "removeDataAttributes(arguments[0]);", item);
		// Obter a lista de elementos filhos
		List<WebElement> directChildren = item.findElements(By.xpath("./*"));

		// Iterar sobre os elementos filhos
		for (WebElement childElement : directChildren) {
			this.limpaItem(childElement, driver);
		}
	}
	
	
	private void trataItem(WebElement item, WebDriver driver) {
		
		if (item.getTagName().equalsIgnoreCase("section")) {
			System.out.println("section");
		}

		if (item.getTagName().equalsIgnoreCase("script") || item.getTagName().equalsIgnoreCase("style") ) {
			return;
		}

		if (item.findElements(By.xpath("./*")).size() == 0) {
			// O elemento não possui elementos filhos
			if (item.getText().length() > 0) {
				this.conteudoTexto += item.getText() + "\n";
			}
		}
		
		/*
		if (item.getTagName().equalsIgnoreCase("body")) {
			String styles = (String) ((JavascriptExecutor) driver).executeScript(
	                "var output = '';" +
	                        "var style = window.getComputedStyle(arguments[0]);" +
	                        "for (const prop of style) {" +
	                        "   output += prop + ': ' + style.getPropertyValue(prop) + ';\\n';" +
	                        "}" +
	                        "return output;",
	                        item);

	        // Aplicar os estilos desejados ao elemento
	        ((JavascriptExecutor) driver).executeScript("arguments[0].setAttribute('style', '" + styles + "');", item);

		} else {
		*/
		String uniqueStyles = (String) ((JavascriptExecutor) driver).executeScript("var output = '';"
					+ "var elementStyles = window.getComputedStyle(arguments[0]);"
					+ "var parentStyles = window.getComputedStyle(arguments[0].parentNode);" + "var excludedProperties = ["
					+ "   'block-size', 'height', 'inline-size',"
					+ "   'margin-block-end', 'margin-block-start', 'margin-bottom', 'margin-inline-end',"
					+ "   'margin-inline-start', 'margin-left', 'margin-right', 'margin-top',"
					+ "   'perspective-origin', 'transform-origin', 'width'" + "];" + "for (const prop of elementStyles) {"
					+ "   if (" + "       elementStyles.getPropertyValue(prop) !== parentStyles.getPropertyValue(prop) &&"
					+ "       !excludedProperties.includes(prop)" + "   ) {"
					+ "       output += prop + ': ' + elementStyles.getPropertyValue(prop) + '; ';" + "   }" + "}"
					+ "return output;", item);
		//((JavascriptExecutor) driver).executeScript("arguments[0].setAttribute('style', '" + uniqueStyles + "');", item);
		this.contId++;
		String id = "id" + this.contId;
		((JavascriptExecutor) driver).executeScript("arguments[0].setAttribute('id', '" + id + "');", item);
		adiciona(id,uniqueStyles);


		// Obter a lista de elementos filhos
		List<WebElement> directChildren = item.findElements(By.xpath("./*"));

		// Iterar sobre os elementos filhos
		for (WebElement childElement : directChildren) {
			this.trataItem(childElement, driver);
		}
	}

	
	
	
	private void adiciona(String id, String uniqueStyles) {
		ItemStyle item = new ItemStyle(id,uniqueStyles);
		this.listaEstilo.add(item);
		
	}

	private String obtemEstiloCompleto(WebElement element, WebDriver driver) {
		String styles = (String) ((JavascriptExecutor) driver).executeScript(
				"var output = '';" + "var style = window.getComputedStyle(arguments[0]);"
						+ "for (const prop of style) {"
						+ "   output += prop + ': ' + style.getPropertyValue(prop) + ';\\n';" + "}" + "return output;",
				element);
		return styles;
	}

	/*
	private static void scrollAteOFinalDaPagina(WebDriver driver) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
	    js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
	}
	*/
	private static void scrollAteOFinalDaPagina(WebDriver driver) {
	        JavascriptExecutor js = (JavascriptExecutor) driver;

	        // Número de pixels a rolar a cada iteração
	        int pixelsPorIteracao = 100;

	        // Altura total da página
	        long alturaTotal = (long) js.executeScript("return Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);");

	        // Número total de iterações
	        int numeroIteracoes = (int) (alturaTotal / pixelsPorIteracao);

	        // Realizar scroll suave
	        for (int i = 0; i < numeroIteracoes; i++) {
	            js.executeScript("window.scrollBy(0, " + pixelsPorIteracao + ")");
	            try {
	                Thread.sleep(100); // Aguardar um curto período de tempo entre as iterações para um efeito suave
	            } catch (InterruptedException e) {
	                e.printStackTrace();
	            }
	        }
	    }
	
	
	private void gravaArquivoStyle(String arquivoStyle) {
		// Inicializa um objeto File
		File arquivo = new File(arquivoStyle);

		try (PrintWriter writer = new PrintWriter(arquivo)) {
			
			for (ItemStyle item : this.listaEstilo) {
				if (item.getStyle().length()>0) {
					String linha = "#" + item.getIdItem() + "{ " + item.getStyle() + " }";
					writer.print(linha + '\n');
				}
			}

			System.out.println("Conteúdo gravado com sucesso no arquivo: " + arquivoStyle);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	
	
	private void gravaArquivo(String caminhoArquivo, String conteudo) {
		// Inicializa um objeto File
		File arquivo = new File(caminhoArquivo);

		try (PrintWriter writer = new PrintWriter(arquivo)) {
			// Grava a string no arquivo (sobrescrevendo se o arquivo existir ou criando-o
			// se não existir)
			writer.print(conteudo);

			System.out.println("Conteúdo gravado com sucesso no arquivo: " + caminhoArquivo);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getArquivoHtml() {
		return arquivoHtml;
	}

	public void setArquivoHtml(String arquivoHtml) {
		this.arquivoHtml =  arquivoHtml ;
	}

	public String getArquivoTexto() {
		return arquivoTexto;
	}

	public void setArquivoTexto(String arquivoTexto) {
		this.arquivoTexto = arquivoTexto;
	}

	public String getArquivoStyle() {
		return arquivoStyle;
	}

	public void setArquivoStyle(String arquivoStyle) {
		this.arquivoStyle = arquivoStyle;
	}

	
}
