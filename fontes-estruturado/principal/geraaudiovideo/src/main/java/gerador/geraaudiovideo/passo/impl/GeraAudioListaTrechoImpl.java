package gerador.geraaudiovideo.passo.impl;

import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.security.SecureRandom;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.sound.sampled.LineUnavailableException;
import javax.sound.sampled.UnsupportedAudioFileException;

import com.google.cloud.texttospeech.v1.AudioConfig;
import com.google.cloud.texttospeech.v1.AudioEncoding;
import com.google.cloud.texttospeech.v1.SynthesisInput;
import com.google.cloud.texttospeech.v1.SynthesizeSpeechResponse;
import com.google.cloud.texttospeech.v1.TextToSpeechClient;
import com.google.cloud.texttospeech.v1.VoiceSelectionParams;
import com.google.protobuf.ByteString;

import br.com.gersis.loopback.modelo.TrechoVsl;
import br.com.gersis.loopback.modelo.VideoVsl;
import gerador.geraaudiovideo.passo.GeraAudioListaTrecho;
import javazoom.jl.decoder.BitstreamException;

public class GeraAudioListaTrechoImpl extends GeraAudioListaTrecho {

	private SecureRandom random = new SecureRandom();
	
	@Override
	protected boolean executaCustom(VideoVsl videoCorrente) {
		try {
			for (TrechoVsl trecho : videoCorrente.getTrechoVsls()) {
				geraTrecho(trecho, videoCorrente);
			}
			this.saidaListaTrecho = videoCorrente.getTrechoVsls();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}

	private void geraTrecho(TrechoVsl trecho, VideoVsl videoCorrente)
			throws IOException, LineUnavailableException, UnsupportedAudioFileException, BitstreamException {
		// TODO Auto-generated method stub
		String script = trecho.getTextoSsml();

		// Inicia o cliente TextToSpeech
		try (TextToSpeechClient textToSpeechClient = TextToSpeechClient.create()) {
			// Define o texto de entrada a ser sintetizado a partir do conteúdo do arquivo
			SynthesisInput input = SynthesisInput.newBuilder().setSsml(script).build();

			// Define a seleção de voz e configuração de áudio
			VoiceSelectionParams voice = VoiceSelectionParams.newBuilder().setLanguageCode("pt-BR")
					.setName(videoCorrente.getVoz()) // Escolha a voz que você deseja usar
					.build();
			AudioConfig audioConfig = AudioConfig.newBuilder().setAudioEncoding(AudioEncoding.LINEAR16).build();

			// Realiza a solicitação de texto para fala
			SynthesizeSpeechResponse response = textToSpeechClient.synthesizeSpeech(input, voice, audioConfig);
			// response.

			// Obtém o conteúdo de áudio da resposta
			ByteString audioContents = response.getAudioContent();

			// Escreve o conteúdo do áudio no arquivo de saída
			if (trecho.getCodigoHexa() == null) {
				trecho.setCodigoHexa(getHexa());
			}
			String nomeArquivo = "/home/usuario/aplicacoes/MarketingDigital/audio/" + trecho.getCodigoHexa() + ".wav";

			try (OutputStream out = new FileOutputStream(nomeArquivo)) {
				out.write(audioContents.toByteArray());
				out.close();
				trecho.setArquivoAudio(nomeArquivo);
				int tempoMs = obterDuracaoAudioEmMilissegundos(nomeArquivo) + 1;
				trecho.setTempo(tempoMs);
				trecho.setTexto(this.removeSsmlTags(trecho.getTextoSsml()));
				System.out.println("Conteúdo de áudio gravado no arquivo " + trecho.getCodigoHexa() + " ms: " + trecho.getTempo());
			}
		}
	}
	
	public static String removeSsmlTags(String input) {
        // Expressão regular para encontrar as tags SSML
        Pattern pattern = Pattern.compile("<[^>]*>");
        Matcher matcher = pattern.matcher(input);
        
        // Substituir todas as tags SSML com uma string vazia
        String result = matcher.replaceAll("");
        
        return result;
    }

	private String getHexa() {
		// Crie um array de bytes e gera números aleatórios
		byte[] bytes = new byte[15]; // 15 bytes * 2 (um byte representa dois caracteres hexadecimais) = 30
										// caracteres hexadecimais
		random.nextBytes(bytes);

		// converte bytes para hexadecimal
		StringBuilder sb = new StringBuilder();
		for (byte b : bytes) {
			sb.append(String.format("%02x", b));
		}

		return sb.toString();
	}
	
	private int obterDuracaoAudioEmMilissegundos(String nomeDoArquivo) {
        String comando = "soxi -D " + nomeDoArquivo;
        try {
            Process processo = Runtime.getRuntime().exec(comando);
            BufferedReader leitor = new BufferedReader(new InputStreamReader(processo.getInputStream()));
            String linha;
            StringBuilder saida = new StringBuilder();
            while ((linha = leitor.readLine()) != null) {
                saida.append(linha);
            }
            leitor.close();
            int status = processo.waitFor();
            if (status == 0) {
                double duracaoSegundos = Double.parseDouble(saida.toString());
                return (int) (duracaoSegundos * 1000);
            } else {
                System.out.println("Erro ao obter a duração do áudio.");
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return -1; // Retorna -1 se houver um erro
    }

}
