package criaproduto.app;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import org.json.JSONObject;

public class GeraInsertApp {
	
    public static void main(String[] args) {
        String inputFilePath = "arquivos/termos.txt"; // Coloque o caminho do arquivo de entrada aqui
        String outputFilePath = "arquivos/output.txt"; // Coloque o caminho do arquivo de saída aqui

        try {
            FileReader fileReader = new FileReader(inputFilePath);
            BufferedReader bufferedReader = new BufferedReader(fileReader);

            FileWriter fileWriter = new FileWriter(outputFilePath);
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);

            String line;
            int cont = 0;
            while ((line = bufferedReader.readLine()) != null) {
                // Processar a linha conforme necessário
            	
                String processedLine = processLine(line);
                // Escrever a linha processada no arquivo de saída
                bufferedWriter.write(processedLine);
                bufferedWriter.newLine();
            }

            bufferedReader.close();
            bufferedWriter.close();

            System.out.println("Arquivo de saída gerado com sucesso!");

        } catch (IOException e) {
            System.err.println("Erro ao ler/escrever arquivo: " + e.getMessage());
        }
    }

    // Método para processar cada linha (substituição simples neste exemplo)
    private static String processLine(String line) {
    	JSONObject obj = new JSONObject();
    	obj.put("nome", line);
    	String linha = "update ProdutoProprioItemNivel1  set json = '" + obj.toString() + "' where nome = '" + line + "';";
        return linha;
    }
}
