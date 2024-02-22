import java.io.File;
import java.io.IOException;

import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Clip;
import javax.sound.sampled.LineUnavailableException;
import javax.sound.sampled.UnsupportedAudioFileException;

import org.bytedeco.javacv.FFmpegFrameGrabber;
import org.bytedeco.javacv.FFmpegFrameRecorder;
import org.bytedeco.javacv.FrameGrabber.Exception;

public class GeradorVideo {

	public static void main(String[] args) {

		try {
			System.setProperty("java.library.path", "/usr/local/bin");
			java.lang.reflect.Field fieldSysPath = ClassLoader.class.getDeclaredField("sys_paths");
			fieldSysPath.setAccessible(true);
			fieldSysPath.set(null, null);

			// Definindo os arquivos de entrada e saída
			String audioFile = "produto1.mp3";
			String videoFile1 = "fase1.mp4";
			String videoFile2 = "fase2.mp4";
			String outputFile = "saida.mp4";

			// Configurando o grabber de frames do vídeo 1
			FFmpegFrameGrabber grabber1 = new FFmpegFrameGrabber(videoFile1);
			grabber1.start();

			// Configurando o grabber de frames do vídeo 2
			FFmpegFrameGrabber grabber2 = new FFmpegFrameGrabber(videoFile2);
			grabber2.start();

			// Configurando o gravador de frames do vídeo final
			FFmpegFrameRecorder recorder = new FFmpegFrameRecorder(outputFile, grabber1.getImageWidth(),
					grabber1.getImageHeight());
			recorder.setVideoCodec(2);
			/*
			 * 1: MPEG4 2: H.264 3: H.265 4: VP8 5: VP9
			 */
			recorder.setFormat("mp4");
			recorder.setFrameRate(grabber1.getFrameRate());
			recorder.start();

			// Abrindo o arquivo de áudio
			AudioInputStream audioInputStream = AudioSystem.getAudioInputStream(new File(audioFile));
			Clip clip = AudioSystem.getClip();
			clip.open(audioInputStream);

			// Reproduzindo o áudio e gravando o vídeo
			clip.start();
			for (int i = 0; i < 60; i++) { // 1 minuto
				recorder.record(grabber1.grabFrame());
			}
			for (int i = 0; i < 60; i++) { // 1 minuto
				recorder.record(grabber2.grabFrame());
			}

			// Parando o áudio e o vídeo
			clip.stop();
			recorder.stop();
			grabber1.stop();
			grabber2.stop();

			System.out.println("Vídeo gerado com sucesso!");
		} catch (Exception e) {
			e.printStackTrace();
		} catch (org.bytedeco.javacv.FFmpegFrameRecorder.Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (UnsupportedAudioFileException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (LineUnavailableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoSuchFieldException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SecurityException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
}
