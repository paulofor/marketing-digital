import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import com.google.cloud.speech.v1.RecognitionConfig;
import com.google.cloud.speech.v1.SpeechClient;
import com.google.cloud.speech.v1.SpeechRecognitionAlternative;
import com.google.cloud.speech.v1.SpeechRecognitionResult;
import com.google.protobuf.ByteString;

public class ExtraiLegenda {
	// Configurar a API Speech-to-Text
    SpeechClient speechClient = SpeechClient.create();
    RecognitionConfig config = RecognitionConfig.newBuilder()
        .setLanguageCode("pt-BR")
        .setEncoding(RecognitionConfig.AudioEncoding.LINEAR16)
        .setSampleRateHertz(16000)
        .build();

    // Carregar o arquivo de áudio
    ByteString audioBytes = ByteString.readFrom(Paths.get("/path/to/audio.wav"));

    // Transcrever o áudio
    RecognitionResults results = speechClient.recognize(config, audioBytes);

    // Gerar as legendas
    List<String> subtitles = new ArrayList<>();
    for (SpeechRecognitionResult result : results.getResultsList()) {
      for (SpeechRecognitionAlternative alternative : result.getAlternativesList()) {
        subtitles.add(alternative.getTranscript());
      }
    }

    // Gerar o arquivo SRT
    SubtitleEdit subtitleEdit = new SubtitleEdit();
    subtitleEdit.setSubtitles(subtitles);
    subtitleEdit.save("/path/to/output.srt");

    // Fechar o cliente da API
    speechClient.shutdownNow();
  }
}
