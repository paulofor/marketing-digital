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
		try (FileWriter writer = new FileWriter(PATH + "/legendas.crt")) {
			int index = 1;
			long startTime = 0; // Tempo inicial para a primeira legenda

			for (TrechoVsl trecho : videoCorrente.getTrechoVsls()) {

				long endTime = startTime + trecho.getTempo(); // Calcula o tempo final da legenda

				// Converter milissegundos para o formato SRT (HH:MM:SS,MS)
				String startTimeFormatted = convertToSrtFormat(startTime);
				String endTimeFormatted = convertToSrtFormat(endTime);

				// Escrever no arquivo SRT
				writer.write(index + "\n");
				writer.write(startTimeFormatted + " --> " + endTimeFormatted + "\n");
				writer.write(trecho.getTexto() + "\n\n");

				startTime = endTime; // Atualiza o startTime para a próxima legenda
				index++;
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return true;
	}

	public static String convertToSrtFormat(long milisegundos) {
		int horas = (int) (milisegundos / (1000 * 60 * 60));
		int minutos = (int) (milisegundos / (1000 * 60) % 60);
		int segundos = (int) (milisegundos / 1000 % 60);
		int milis = (int) (milisegundos % 1000);

		return String.format("%02d:%02d:%02d,%03d", horas, minutos, segundos, milis);
	}

}
