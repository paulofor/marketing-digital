package gerador.testeselenium.passo.impl;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import gerador.testeselenium.passo.ExecutaSelenium;

public class ExecutaSeleniumImpl extends ExecutaSelenium {

	private String ARQUIVO_SAIDA = "/home/usuario/aplicacoes/MarketingDigital/pagina-venda-pesquisa-desenvolvimento/depilacao.html";
	private BufferedWriter bufferedWriter = null;
	
	private List<Elemento> listaElemento = null;
	
	@Override
	protected boolean executaCustom() {

		try {
		
			System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver");
			WebDriver driver = new ChromeDriver();
			driver.get("https://priscillafidelisacademy.com.br/?ref=R88667670S");

			// Body
			WebElement bodyElement = driver.findElement(By.tagName("body"));
			Elemento body = this.processaElemento(bodyElement, driver);
			String estiloBody = this.obtemEstiloCompleto(bodyElement, driver);
			
			// wp-page
			WebElement elementWithDataAttribute = driver.findElement(By.cssSelector("[data-elementor-type='wp-page']"));
			Elemento pagina = this.processaElemento(elementWithDataAttribute, driver);
			
			// Filhos de wp-page
			List<WebElement> directChildren = elementWithDataAttribute.findElements(By.xpath("./*"));
	
			int contador = 0;
			// Iterar sobre os filhos diretos e fazer o que for necessário
			for (WebElement child : directChildren) {
				String attributeValue = child.getAttribute("data-element_type");
				if (attributeValue != null && attributeValue.equals("container")) {
				    contador++;
					//this.listaElemento = this.criaListaElemento(child, driver, contador);
					//this.insereEstilos();
				    System.out.println("Limpando o elmento: " + contador);
					limpaElemento(child,driver, contador);
				    //if (contador==3) break;
				} else {
				    System.out.println("O elemento não possui o atributo data-element_type com o valor 'container'.");
				}

			}
			System.out.println("Total : " + contador);
			this.geraArquivoBody(bodyElement, estiloBody, driver);
			// Fechar o navegador
			driver.quit();
	
			// this.verificaDriver();
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	private String obtemEstiloCompleto(WebElement element, WebDriver driver) {
        String styles = (String) ((JavascriptExecutor) driver).executeScript(
                "var output = '';" +
                        "var style = window.getComputedStyle(arguments[0]);" +
                        "for (const prop of style) {" +
                        "   output += prop + ': ' + style.getPropertyValue(prop) + ';\\n';" +
                        "}" +
                        "return output;", element);
        return styles;
	}
	
	
	private void geraArquivoBody(WebElement body, String estilo, WebDriver driver) throws IOException {
		this.abreArquivo();
		this.inicioHtml();

		
		this.insereEstiloElemento("body", estilo);
		// Executa um script JavaScript para obter o HTML do elemento e de todos os seus descendentes
		String htmlContent = (String) ((JavascriptExecutor) driver).executeScript(
		    "function getOuterHtml(element) {" +
		            "    var temp = document.createElement('div');" +
		            "    temp.appendChild(element.cloneNode(true));" +
		            "    return temp.innerHTML;" +
		            "}" +
		            "return getOuterHtml(arguments[0]);", body);

		bufferedWriter.write(htmlContent);

		this.finalHtml();
		this.fechaArquivo();
		
	}
	
	
	private Elemento processaElemento(WebElement element, WebDriver driver) throws IOException {
		Random rand = new Random();
	    String id = "element_" + rand.nextInt(1000000); // Gera um ID aleatório para o elemento

	    String uniqueStyles = (String) ((JavascriptExecutor) driver).executeScript(
                "var output = '';" +
                        "var elementStyles = window.getComputedStyle(arguments[0]);" +
                        "var parentStyles = window.getComputedStyle(arguments[0].parentNode);" +
                        "for (const prop of elementStyles) {" +
                        "   if (elementStyles.getPropertyValue(prop) !== parentStyles.getPropertyValue(prop)) {" +
                        "       output += prop + ': ' + elementStyles.getPropertyValue(prop) + '; ';" +
                        "   }" +
                        "}" +
                        "return output;", element);
        ((JavascriptExecutor) driver).executeScript(
                "arguments[0].setAttribute('id', arguments[1]);", element, id);


        return new Elemento(id, uniqueStyles);

	}
	
	
	private List<Elemento> criaListaElemento(WebElement element, WebDriver driver, int num) throws IOException {
	        List<Elemento> listaElementos = new ArrayList<Elemento>();
	        processaElemento(element, listaElementos, driver, num);
	        return listaElementos;
	}

	private void processaElemento(WebElement element, List<Elemento> listaElementos, WebDriver driver, int num) throws IOException {
	        Random rand = new Random();
	        String id = "element_" + rand.nextInt(1000000); // Gera um ID aleatório para o elemento

	        // todos os estilos
	        //String styles = (String) ((JavascriptExecutor) driver).executeScript(
	        //        "var output = '';" +
	        //                "var style = window.getComputedStyle(arguments[0]);" +
	        //                "for (const prop of style) {" +
	        //                "   output += prop + ': ' + style.getPropertyValue(prop) + ';\\n';" +
	        //                "}" +
	        //                "return output;", element);
	        // estilos diferentes da classe pai
	        // Obter estilos do elemento e do pai
	        String uniqueStyles = (String) ((JavascriptExecutor) driver).executeScript(
	                "var output = '';" +
	                        "var elementStyles = window.getComputedStyle(arguments[0]);" +
	                        "var parentStyles = window.getComputedStyle(arguments[0].parentNode);" +
	                        "for (const prop of elementStyles) {" +
	                        "   if (elementStyles.getPropertyValue(prop) !== parentStyles.getPropertyValue(prop)) {" +
	                        "       output += prop + ': ' + elementStyles.getPropertyValue(prop) + '; ';" +
	                        "   }" +
	                        "}" +
	                        "return output;", element);
	        ((JavascriptExecutor) driver).executeScript(
	                "arguments[0].setAttribute('id', arguments[1]);", element, id);


	        Elemento novoElemento = new Elemento(id, uniqueStyles);
	        listaElementos.add(novoElemento);

	        List<WebElement> elementosFilhos = element.findElements(By.cssSelector("*"));
	        for (WebElement filho : elementosFilhos) {
	            processaElemento(filho, listaElementos, driver, num); // Recursivamente processa os elementos filhos
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
		
		((JavascriptExecutor) driver).executeScript(
		    "function removeDataAttributesAndClasses(element) {" +
		            "    var attributes = element.attributes;" +
		            "    for (var i = 0; i < attributes.length; i++) {" +
		            "        if (attributes[i].name.startsWith('data')) {" +
		            "            element.removeAttribute(attributes[i].name);" +
		            "            i--;" + // Decrementa para lidar com a mudança no comprimento da lista de atributos
		            "        }" +
		            "    }" +
		            "    var classes = element.classList;" +
		            "    for (var j = 0; j < classes.length; j++) {" +
		            "        if ( classes[j].startsWith('elementor-') || classes[j].startsWith('e-')) {" +
		            "            element.classList.remove(classes[j]);" +
		            "            j--;" + // Decrementa para lidar com a mudança no comprimento da lista de classes
		            "        }" +
		            "    }" +
		            "    var children = element.children;" +
		            "    for (var k = 0; k < children.length; k++) {" +
		            "        removeDataAttributesAndClasses(children[k]);" +
		            "    }" +
		            "}" +
		            "removeDataAttributesAndClasses(arguments[0]);", element);
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
	
	private void insereEstiloElemento(String rotulo, String estilo) throws IOException {
		linha("<style>");
		linha(rotulo + "{");
		linha(estilo);
		linha("}");
		linha("</style>");
	}
	
	private void insereEstilos() throws IOException {
		linha("<style>");
		for (Elemento elemento : this.listaElemento) {
			linha("#" + elemento.getId() + "{");
			linha(elemento.getStyle());
			linha("}");
		}
		linha("</style>");
	}
	
	private void inicioHtml() throws IOException {
		linha("<!DOCTYPE html>");
		linha("<html lang=\"pt-br\">");
		linha("<head>");
		linha("<meta charset=\"UTF-8\">");
		linha("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
		linha("<title>Teste Selnium</title>");
		linha("</head>");
	}
	private void finalHtml() throws IOException {
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
