import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

import com.google.cloud.speech.v1.RecognitionAudio;
import com.google.cloud.speech.v1.RecognitionConfig;
import com.google.cloud.speech.v1.RecognizeResponse;
import com.google.cloud.speech.v1.SpeechClient;
import com.google.cloud.speech.v1.SpeechRecognitionAlternative;
import com.google.cloud.speech.v1.SpeechRecognitionResult;
import com.google.protobuf.ByteString;

public class SpeechToText {
    public static void main(String[] args)  {
        String inputFile = "/home/usuario/aplicacoes/MarketingDigital/copy/produto1.mp3"; // Caminho para o arquivo de áudio MP3
        String outputFile = "/home/usuario/aplicacoes/MarketingDigital/copy/produto1.srt"; // Caminho para o arquivo de legenda .srt
        String languageCode = "pt-BR"; // Código do idioma

        // Configurar o cliente SpeechClient
        try (SpeechClient speechClient = SpeechClient.create()) {
            // Carregar o arquivo de áudio
            byte[] audioBytes = Files.readAllBytes(Paths.get(inputFile));
            ByteString audioBytesStr = ByteString.copyFrom(audioBytes);

            // Configurar a entrada do reconhecimento de fala
            RecognitionConfig config =
                    RecognitionConfig.newBuilder()
                            .setEncoding(RecognitionConfig.AudioEncoding.MP3)
                            .setSampleRateHertz(24000)
                            .setLanguageCode(languageCode)
                            .build();
            RecognitionAudio audio = RecognitionAudio.newBuilder().setContent(audioBytesStr).build();

            // Fazer a solicitação de reconhecimento de fala
            RecognizeResponse response = speechClient.recognize(config, audio);
            List<SpeechRecognitionResult> results = response.getResultsList();

            // Escrever o resultado em um arquivo .srt
            // Escrever o resultado em um arquivo .srt
            try (PrintWriter writer = new PrintWriter(new FileWriter(outputFile))) {
                double lastEndTime = 0.0; // Tempo de término do resultado anterior
                int counter = 1;
                for (SpeechRecognitionResult result : results) {
                    SpeechRecognitionAlternative alternative = result.getAlternativesList().get(0);
                    String transcript = alternative.getTranscript();
                    double endTime = lastEndTime + (result.getResultEndTime().getSeconds() + (result.getResultEndTime().getNanos() / 1e9));
                    writer.println(counter);
                    writer.printf("%.3f --> %.3f\n", lastEndTime, endTime);
                    writer.println(transcript);
                    writer.println();
                    lastEndTime = endTime;
                    counter++;
                }
            }
        } catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        System.out.println("Legendas geradas com sucesso em: " + outputFile);
    }
    
}

