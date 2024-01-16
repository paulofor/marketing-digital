package gerador.testeselenium.passo.exemplos;


import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public abstract class ExemploBase {

	
	protected abstract String getUrl();
	
	public void inicializaPagina() {
		try {
			System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver");
			
	        // Configurar as opções do Chrome para simular um dispositivo móvel
	        ChromeOptions chromeOptions = new ChromeOptions();
	        chromeOptions.addArguments("--window-size=360,640"); // Defina as dimensões da tela do dispositivo móvel
	        chromeOptions.addArguments("--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1"); // Defina o user-agent para um dispositivo móvel

	        // Inicializar o WebDriver com as opções configuradas
	        WebDriver driver = new ChromeDriver(chromeOptions);
			//WebDriver driver = new ChromeDriver();
			
			driver.get(getUrl());

			// Body
			WebElement bodyElement = driver.findElement(By.tagName("body"));

			String uniqueStyles = (String) ((JavascriptExecutor) driver).executeScript(
			    "var output = '';" +
			    "var elementStyles = window.getComputedStyle(arguments[0]);" +
			    "var parentStyles = window.getComputedStyle(arguments[0].parentNode);" +
			    "var excludedProperties = [" +
			    "   'block-size', 'height', 'inline-size'," +
			    "   'margin-block-end', 'margin-block-start', 'margin-bottom', 'margin-inline-end'," +
			    "   'margin-inline-start', 'margin-left', 'margin-right', 'margin-top'," +
			    "   'perspective-origin', 'transform-origin', 'width'" +
			    "];" +
			    "for (const prop of elementStyles) {" +
			    "   if (" +
			    "       elementStyles.getPropertyValue(prop) !== parentStyles.getPropertyValue(prop) &&" +
			    "       !excludedProperties.includes(prop)" +
			    "   ) {" +
			    "       output += prop + ': ' + elementStyles.getPropertyValue(prop) + '; ';" +
			    "   }" +
			    "}" +
			    "return output;", bodyElement);

			System.out.println("Estilos do elemento (sem propriedades excluídas): " + uniqueStyles);

	        

	        driver.quit();
		
		} catch (Exception e) {
			e.printStackTrace();
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
}
