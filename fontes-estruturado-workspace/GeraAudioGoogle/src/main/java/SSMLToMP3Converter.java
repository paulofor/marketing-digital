import com.google.cloud.texttospeech.v1.*;
import com.google.protobuf.ByteString;
import java.io.FileOutputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

public class SSMLToMP3Converter {

    public static void main(String[] args) {
        String inputFilePath = "artefatos/dialogo.ssml";
        String outputFilePath = "artefatos/saida.mp3";

        try {
            String ssmlContent = new String(Files.readAllBytes(Paths.get(inputFilePath)), StandardCharsets.UTF_8);
            ByteString audioBytes = convertSSMLToMP3(ssmlContent);
            writeBytesToFile(audioBytes, outputFilePath);
            System.out.println("Arquivo MP3 gerado com sucesso em: " + outputFilePath);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static ByteString convertSSMLToMP3(String ssmlContent) throws Exception {
        try (TextToSpeechClient textToSpeechClient = TextToSpeechClient.create()) {
            SynthesisInput input = SynthesisInput.newBuilder().setSsml(ssmlContent).build();
            VoiceSelectionParams voice = VoiceSelectionParams.newBuilder()
                    .setLanguageCode("pt-BR")
                    .setName("pt-BR-Wavenet-B")
                    .build();
            AudioConfig audioConfig = AudioConfig.newBuilder()
                    .setAudioEncoding(AudioEncoding.MP3)
                    .build();
            SynthesizeSpeechResponse response = textToSpeechClient.synthesizeSpeech(input, voice, audioConfig);
            return response.getAudioContent();
        }
    }

    private static void writeBytesToFile(ByteString bytes, String filePath) throws Exception {
        try (FileOutputStream fos = new FileOutputStream(filePath)) {
            fos.write(bytes.toByteArray());
        }
    }
}

