import com.google.cloud.texttospeech.v1.*;
import com.google.protobuf.ByteString;
import java.io.*;

public class TextToSpeechFromFile {
    public static void main(String[] args) throws Exception {
        // Carrega o conteúdo do arquivo de texto
        String script = loadScriptFromFile("/home/usuario/aplicacoes/MarketingDigital/copy/produto1.ssml");

        // Inicia o cliente TextToSpeech
        try (TextToSpeechClient textToSpeechClient = TextToSpeechClient.create()) {
            // Define o texto de entrada a ser sintetizado a partir do conteúdo do arquivo
            SynthesisInput input = SynthesisInput.newBuilder().setSsml(script).build();

              
            
            // Define a seleção de voz e configuração de áudio
            VoiceSelectionParams voice = VoiceSelectionParams.newBuilder()
                    .setLanguageCode("pt-BR")
                    .setName("pt-BR-Wavenet-A") // Escolha a voz que você deseja usar
                    .build();
            AudioConfig audioConfig = AudioConfig.newBuilder()
            		.setAudioEncoding(AudioEncoding.MP3)
            		.build();

            // Realiza a solicitação de texto para fala
            SynthesizeSpeechResponse response = textToSpeechClient.synthesizeSpeech(input, voice, audioConfig);
            //response.
            
            // Obtém o conteúdo de áudio da resposta
            ByteString audioContents = response.getAudioContent();

            // Escreve o conteúdo do áudio no arquivo de saída
            try (OutputStream out = new FileOutputStream("/home/usuario/aplicacoes/MarketingDigital/copy/produto1.mp3")) {
                out.write(audioContents.toByteArray());
                System.out.println("Conteúdo de áudio gravado no arquivo \"output.mp3\"");
            }
        }
    }

    // Método para ler o conteúdo do arquivo de texto
    private static String loadScriptFromFile(String filePath) throws IOException {
        StringBuilder contentBuilder = new StringBuilder();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = br.readLine()) != null) {
                contentBuilder.append(line).append("\n");
            }
        }
        return contentBuilder.toString();
    }
}

