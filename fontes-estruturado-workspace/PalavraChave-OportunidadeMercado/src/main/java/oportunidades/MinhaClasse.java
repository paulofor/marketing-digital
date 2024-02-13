package oportunidades;



import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.JSONArray;

public class MinhaClasse {
    public static void main(String[] args) throws IOException {
    	
        String urlString = "https://www.google.com/complete/search?q=como+trabalhar&cp=14&client=gws-wiz-serp&xssi=t&gs_pcrt=undefined&hl=pt-BR&authuser=0&pq=google&psi=g-HGZdyjPILP5OUPh6yTuAY.1707532677770&dpr=1";
        URL url = new URL(urlString);

        // Abrindo a conexão HTTP
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");
        
        // Lendo a resposta
        BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        StringBuilder response = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            response.append(line);
        }
        reader.close();

        // Removendo o prefixo de segurança
        String jsonResponse = response.toString().substring(5); // Ignora os primeiros 5 caracteres

        // Parseando o JSON
        JSONArray jsonArray = new JSONArray(jsonResponse);
        for (int i = 0; i < jsonArray.length(); i++) {
            JSONArray innerArray = jsonArray.getJSONArray(i);
            String text = innerArray.getString(0);
            text = text.replace("\\u003cb\\u003e", "<b>").replace("\\u003c/b\\u003e", "</b>").replace("\\/", "/");
            System.out.println(text);
        }
    }
}
