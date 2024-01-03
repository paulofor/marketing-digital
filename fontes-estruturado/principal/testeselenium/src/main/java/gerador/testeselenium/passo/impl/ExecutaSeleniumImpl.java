package gerador.testeselenium.passo.impl;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import gerador.testeselenium.passo.ExecutaSelenium;

public class ExecutaSeleniumImpl extends ExecutaSelenium {

	private String ARQUIVO_SAIDA = "/home/usuario/aplicacoes/MarketingDigital/pagina-venda-pesquisa-desenvolvimento/depilacao.html";
	private BufferedWriter bufferedWriter = null;
	
	@Override
	protected boolean executaCustom() {

		try {
		
			System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver");
	
			// Inicializar o WebDriver
			WebDriver driver = new ChromeDriver();
	
			// Abrir uma página da web
			driver.get("https://priscillafidelisacademy.com.br/?ref=R88667670S");
			this.abreArquivo();
			this.inicioHtml();
			// Encontrar o elemento que tenha o atributo 'data-elementor-type' com o valor
			// 'wp-page'
			WebElement elementWithDataAttribute = driver.findElement(By.cssSelector("[data-elementor-type='wp-page']"));
	
			List<WebElement> directChildren = elementWithDataAttribute.findElements(By.xpath("./*"));
	
			int contador = 0;
			// Iterar sobre os filhos diretos e fazer o que for necessário
			for (WebElement child : directChildren) {
				String attributeValue = child.getAttribute("data-element_type");
				if (attributeValue != null && attributeValue.equals("container")) {
					this.linha("");
					this.linha("<!  ---- Novo Elmento --->");
				    System.out.println("O elemento possui o atributo data-element_type com o valor 'container'.");
				    contador++;
					limpaElemento(child,driver, contador);
				    if (contador==3) break;
				} else {
				    System.out.println("O elemento não possui o atributo data-element_type com o valor 'container'.");
				}

			}
			
			System.out.println("Total : " + contador);
			
			this.finalHtml();
			this.fechaArquivo();
			
			// Fechar o navegador
			driver.quit();
	
			// this.verificaDriver();
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	
	private void limpaElemento(WebElement element, WebDriver driver, int num) throws IOException {
		// Executa um script JavaScript para remover os atributos 'data-' do elemento e de todos os seus descendentes

		((JavascriptExecutor) driver).executeScript(
			    "var parentElement = arguments[0].parentNode;" +
			            "parentElement.setAttribute('id', 'section" + num + "');" +
			            "return arguments[0];", element);
		
		
		// Executa um script JavaScript para remover os atributos 'data-' do elemento e de todos os seus descendentes
		((JavascriptExecutor) driver).executeScript(
		    "function removeDataAttributes(element) {" +
		            "    var attributes = element.attributes;" +
		            "    for (var i = 0; i < attributes.length; i++) {" +
		            "        if (attributes[i].name.startsWith('data')) {" +
		            "            element.removeAttribute(attributes[i].name);" +
		            "            i--;" + // Decrementa para lidar com a mudança no comprimento da lista de atributos
		            "        }" +
		            "    }" +
		            "    var children = element.children;" +
		            "    for (var j = 0; j < children.length; j++) {" +
		            "        removeDataAttributes(children[j]);" +
		            "    }" +
		            "}" +
		            "removeDataAttributes(arguments[0]);", element);

		// Executa um script JavaScript para obter o HTML do elemento e de todos os seus descendentes
		String htmlContent = (String) ((JavascriptExecutor) driver).executeScript(
		    "function getOuterHtml(element) {" +
		            "    var temp = document.createElement('div');" +
		            "    temp.appendChild(element.cloneNode(true));" +
		            "    return temp.innerHTML;" +
		            "}" +
		            "return getOuterHtml(arguments[0]);", element);

		// Mostra o HTML do elemento na tela
		System.out.println("HTML do elemento após a remoção dos atributos:");
		bufferedWriter.write(htmlContent);
	}
	
	private void abreArquivo() throws IOException {
	    File file = new File(ARQUIVO_SAIDA);
	    FileWriter fileWriter = new FileWriter(file);
	    bufferedWriter = new BufferedWriter(fileWriter);
	}
	private void fechaArquivo() throws IOException {
		bufferedWriter.close();
		System.out.println("Conteúdo HTML gravado em " + this.ARQUIVO_SAIDA + " com sucesso!");
	}
	
	private void linha(String linha) throws IOException {
		this.bufferedWriter.write(linha);
		this.bufferedWriter.newLine();
	}
	
	private void inicioHtml() throws IOException {
		linha("<!DOCTYPE html>");
		linha("<html lang=\"pt-br\">");
		linha("<head>");
		linha("<meta charset=\"UTF-8\">");
		linha("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
		linha("<title>Teste Selnium</title>");
		linha("<body>");
	}
	private void finalHtml() throws IOException {
		linha("");
		linha("</body>");
		linha("</html>");
	}

	private void verificaDriver() {
		String path = System.getProperty("webdriver.chrome.driver");
		if (path != null) {
			System.out.println("Caminho do ChromeDriver: " + path);
		} else {
			System.out.println("ChromeDriver não encontrado no sistema.");
		}
	}

}
