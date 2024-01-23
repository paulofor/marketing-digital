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

public class SeleniumArtigoUtil {

	private String url;
	private String tagId;
	private String conteudoTexto;
	private String arquivoTexto;

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

			driver.get(url);

			// Body
			WebElement principalElement = driver.findElement(By.id(tagId));

			//this.scrollAteOFinalDaPagina(driver);
			this.trataItem(principalElement, driver);

			driver.quit();

			this.gravaArquivo(arquivoTexto, conteudoTexto);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	
	private void trataItem(WebElement item, WebDriver driver) {

		System.out.println("Entrou no trataItem : " + item.toString());
		
		if (item.getTagName().equalsIgnoreCase("script") || item.getTagName().equalsIgnoreCase("style")) {
			return;
		}

		if (item.findElements(By.xpath("./*")).size() == 0) {
			// O elemento não possui elementos filhos
			if (item.getText().length() > 0) {
				this.conteudoTexto += item.getText() + "\n";
			}
		}

		// Obter a lista de elementos filhos
		List<WebElement> directChildren = item.findElements(By.xpath("./*"));

		// Iterar sobre os elementos filhos
		for (WebElement childElement : directChildren) {
			this.trataItem(childElement, driver);
		}
	}

	private static void scrollAteOFinalDaPagina(WebDriver driver) {
		JavascriptExecutor js = (JavascriptExecutor) driver;

		// Número de pixels a rolar a cada iteração
		int pixelsPorIteracao = 100;

		// Altura total da página
		long alturaTotal = (long) js.executeScript(
				"return Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);");

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

	public String getArquivoTexto() {
		return arquivoTexto;
	}

	public void setArquivoTexto(String arquivoTexto) {
		this.arquivoTexto = arquivoTexto;
	}

	public void setTagId(String tagId) {
		this.tagId = tagId;
	}
	

}
