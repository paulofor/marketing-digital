package gerador.geraaudiovideo.passo.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.LineUnavailableException;
import javax.sound.sampled.UnsupportedAudioFileException;

import javazoom.jl.decoder.Bitstream;
import javazoom.jl.decoder.BitstreamException;
import javazoom.jl.decoder.Header;

public class ObtemTamanhoAudio {

	public static void main(String[] args) throws LineUnavailableException {
		// TODO Auto-generated method stub
		// Salve o conteúdo de áudio em um arquivo
		
		String nomeArquivo = "/home/usuario/aplicacoes/MarketingDigital/audio/88bf9af6fd039d6f904b0973cc8622.mp3";
		File audioFile = new File(nomeArquivo);

		// Carregue o arquivo de áudio
		AudioInputStream audioInputStream;
		try {
			 File file = new File(nomeArquivo);
	            FileInputStream fis = new FileInputStream(file);
	            Bitstream bitstream = new Bitstream(fis);
	            Header header = bitstream.readFrame();
	            float duration = header.total_ms((int) file.length());
	            System.out.println("Duração do áudio: " + duration + " milissegundos");
	            bitstream.close();
		} catch (IOException | BitstreamException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

		// Obtenha a duração do áudio em milissegundos
		
	}

}
