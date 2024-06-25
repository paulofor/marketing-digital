package teste;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class LinkedInJobScraper {
    public static void main(String[] args) {
        // Caminho para o WebDriver
    	System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver");

        // Inicializar o navegador
        WebDriver driver = new ChromeDriver();

        try {
            // Acessar a página de login do LinkedIn
            driver.get("https://www.linkedin.com/login");

            // Fazer login
            WebElement emailField = driver.findElement(By.id("username"));
            emailField.sendKeys("paulofore@gmail.com");

            WebElement passwordField = driver.findElement(By.id("password"));
            passwordField.sendKeys("Digicom2004");
            passwordField.sendKeys(Keys.RETURN);

            // Esperar até que a página principal seja carregada
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

            // Navegar para a página de busca de vagas
            driver.get("https://www.linkedin.com/jobs");

            // Inserir termo de pesquisa e buscar
            WebElement searchBox = driver.findElement(By.className("jobs-search-box__text-input"));
            searchBox.sendKeys("Cientista de Dados");
            searchBox.sendKeys(Keys.RETURN);

            // Esperar resultados de pesquisa
            TimeUnit.SECONDS.sleep(5);

            // Coletar descrições de vagas
            List<WebElement> jobs = driver.findElements(By.className("job-card-container__link"));

            for (WebElement job : jobs) {
                job.click();
                TimeUnit.SECONDS.sleep(2);

                try {
                    WebElement description = driver.findElement(By.id("job-details"));
                    System.out.println("Descrição da Vaga:");
                    System.out.println(description.getText());
                    System.out.println("----");
                } catch (Exception e) {
                    System.out.println("Não foi possível extrair a descrição da vaga.");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Fechar o navegador
            driver.quit();
        }
    }
}

