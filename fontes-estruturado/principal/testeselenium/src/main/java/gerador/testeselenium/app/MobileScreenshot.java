package gerador.testeselenium.app;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.OutputType;
import ru.yandex.qatools.ashot.AShot;
import ru.yandex.qatools.ashot.Screenshot;
import ru.yandex.qatools.ashot.shooting.ShootingStrategies;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class MobileScreenshot {
    public static void main(String[] args) {
        // Configuração do ChromeDriver
        System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver");
        
        // Configurações do Chrome
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized"); // Inicia maximizado
        options.addArguments("--window-size=375,812"); // Define tamanho da janela para um dispositivo móvel
        
        // Inicialização do WebDriver
        WebDriver driver = new ChromeDriver(options);
        
        // Abrindo URL
        driver.get("https://puravive.com/explore/");
        
        // Espera para garantir que a página foi carregada completamente
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        // Capturando a página inteira
        Screenshot screenshot = new AShot().shootingStrategy(ShootingStrategies.viewportPasting(1000)).takeScreenshot(driver);
        
        // Salvando a captura de tela em um arquivo
        try {
            ImageIO.write(screenshot.getImage(), "PNG", new File("mobile_screenshot.png"));
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        // Fechando o navegador
        driver.quit();
    }
}
