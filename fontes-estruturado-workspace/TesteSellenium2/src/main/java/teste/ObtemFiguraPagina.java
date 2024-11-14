package teste;

import java.io.File;
import java.io.IOException;

import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import ru.yandex.qatools.ashot.AShot;
import ru.yandex.qatools.ashot.Screenshot;
import ru.yandex.qatools.ashot.shooting.ShootingStrategies;


public class ObtemFiguraPagina {

	private String url;
	private String arquivoImagem;
	
	
	
	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getArquivoImagem() {
		return arquivoImagem;
	}
	public void setArquivoImagem(String arquivoImagem) {
		this.arquivoImagem = arquivoImagem;
	}
	
	public void executaLeitura() {
		  //System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver");
			System.setProperty("webdriver.chrome.driver", "/paulo/chromedriver-win32/chromedriver.exe");

	        
	        // Configurações do Chrome
	        ChromeOptions options = new ChromeOptions();
	        options.addArguments("--start-maximized"); // Inicia maximizado
	        options.addArguments("--window-size=375,812"); // Define tamanho da janela para um dispositivo móvel
	        
	        // Inicialização do WebDriver
	        WebDriver driver = new ChromeDriver(options);
	        
	        // Abrindo URL
	        driver.get(this.url);
	        
	        // Capturando a página inteira
	        Screenshot screenshot = new AShot().shootingStrategy(ShootingStrategies.viewportPasting(1000)).takeScreenshot(driver);
	        
	        // Salvando a captura de tela em um arquivo
	        try {
	            ImageIO.write(screenshot.getImage(), "PNG", new File(this.arquivoImagem));
	        } catch (IOException e) {
	            e.printStackTrace();
	        }
	        
	        // Fechando o navegador
	        driver.quit();
	}
	
}
