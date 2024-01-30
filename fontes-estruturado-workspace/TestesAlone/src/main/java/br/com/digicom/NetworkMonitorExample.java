package br.com.digicom;
import org.openqa.selenium.Proxy;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import net.lightbody.bmp.BrowserMobProxy;
import net.lightbody.bmp.BrowserMobProxyServer;
import net.lightbody.bmp.client.ClientUtil;
import net.lightbody.bmp.core.har.Har;
import net.lightbody.bmp.proxy.CaptureType;

public class NetworkMonitorExample {
	
    public static void main(String[] args) {
    	BrowserMobProxy proxy = new BrowserMobProxyServer();
        proxy.start(0);

        // Criar o proxy do Selenium diretamente
        Proxy seleniumProxy = ClientUtil.createSeleniumProxy(proxy);

        // Configurar opções do Chrome com o proxy
        ChromeOptions options = new ChromeOptions();
        options.setProxy(seleniumProxy);

        // Inicializar o driver do Chrome com as opções
        ChromeDriver driver = new ChromeDriver(options);

        // Iniciar a captura de tráfego
        proxy.enableHarCaptureTypes(CaptureType.REQUEST_CONTENT, CaptureType.RESPONSE_CONTENT);
        proxy.newHar("example");

        // Navegar para a página desejada
        driver.get("https://cursonailacademy.com/?ref=H89889583A");

        // Realizar suas ações com o Selenium aqui

        // Parar a captura e obter o HAR (HTTP Archive)
        Har har = proxy.getHar();

        // Exibir informações sobre as solicitações capturadas
        har.getLog().getEntries().forEach(entry -> {
            System.out.println("URL: " + entry.getRequest().getUrl());
            System.out.println("Status: " + entry.getResponse().getStatus());
        });

        // Fechar o navegador e o proxy
        driver.quit();
        proxy.stop();
    }
}

