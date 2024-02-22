import java.io.IOException;

public class ExecutarScriptShell {

    public static void main(String[] args) {
        try {
            // Caminho para o script shell
            String caminhoScript = "/caminho/para/seu/script.sh";

            // Executar o script shell
            Process processo = Runtime.getRuntime().exec(caminhoScript);

            // Aguardar o término do processo
            int status = processo.waitFor();

            // Verificar se o script foi executado com sucesso
            if (status == 0) {
                System.out.println("Script shell executado com sucesso.");
            } else {
                System.out.println("Ocorreu um erro ao executar o script shell.");
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
