package gerador.criaebookparaproduto.app;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import org.json.JSONArray;
import org.json.JSONObject;

public class LeMeuJsonApp {

	public static void main(String[] args) {
		// Substitua o caminho do arquivo pelo caminho do seu arquivo JSON
        String filePath = "/home/usuario/aplicacoes/MarketingDigital/produto-proprio/50-termos-informatica";

        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            StringBuilder jsonString = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                jsonString.append(line);
            }

            // Converte a string JSON para um JSONArray
            JSONArray jsonArray = new JSONArray(jsonString.toString());

            // Itera sobre os elementos do JSONArray
            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject element = jsonArray.getJSONObject(i);
                System.out.println("insert into ProdutoProprioItemNivel1 (json,nome,produtoProprioVersaoId) values ('" + element.toString().replace("'", "''") + "', " + 
                		" '" + element.getString("termo").replace("'", "''") + "' , 2 );");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
