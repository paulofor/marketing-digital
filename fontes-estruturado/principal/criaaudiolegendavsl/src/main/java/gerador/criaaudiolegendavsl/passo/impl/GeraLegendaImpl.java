package gerador.criaaudiolegendavsl.passo.impl;

import java.io.FileWriter;
import java.io.IOException;

import br.com.gersis.loopback.modelo.TrechoVsl;
import br.com.gersis.loopback.modelo.VideoVsl;
import gerador.criaaudiolegendavsl.passo.GeraLegenda;

public class GeraLegendaImpl extends GeraLegenda {

	private static String PATH = "/home/usuario/aplicacoes/MarketingDigital/audio/completo";

	@Override
	protected boolean executaCustom(VideoVsl videoCorrente) {
		String arquivoLegenda = PATH + "/legendas_" + formataNumero(videoCorrente.getIdInteger()) + ".srt";
		videoCorrente.setArquivoLegenda(arquivoLegenda);
		try {
			FileWriter writer = new FileWriter(arquivoLegenda);
			int index = 1;
			long startTime = 0; 

			for (TrechoVsl trecho : videoCorrente.getTrechoVsls()) {

				long endTime = startTime + trecho.getTempo(); // Calcula o tempo final da legenda
					
				// Converter milissegundos para o formato SRT (HH:MM:SS,MS)
				String startTimeFormatted = convertToSrtFormat(startTime);
				String endTimeFormatted = convertToSrtFormat(endTime);

				if (startTime==0) startTimeFormatted = convertToSrtFormat(1000);
				// Escrever no arquivo SRT
				writer.write(index + "\n");
				writer.write(startTimeFormatted + " --> " + endTimeFormatted + "\n");
				writer.write(trecho.getTexto() + "\n\n");

				startTime = endTime; // Atualiza o startTime para a próxima legenda
				index++;
			}
			writer.close();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public static String convertToSrtFormat(long milisegundos) {
		int horas = (int) (milisegundos / (1000 * 60 * 60));
		int minutos = (int) (milisegundos / (1000 * 60) % 60);
		int segundos = (int) (milisegundos / 1000 % 60);
		int milis = (int) (milisegundos % 1000);

		return String.format("%02d:%02d:%02d,%03d", horas, minutos, segundos, milis);
	}
	private String formataNumero(int numero) {
        // Converte o número para uma string
        String numeroString = Integer.toString(numero);
        
        // Verifica o comprimento da string
        int comprimento = numeroString.length();
        
        // Adiciona zeros à esquerda se necessário
        if (comprimento < 3) {
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < 3 - comprimento; i++) {
                sb.append('0');
            }
            sb.append(numeroString);
            return sb.toString();
        } else {
            return numeroString.substring(0, 3);
        }
    }

}
