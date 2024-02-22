import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import org.jcodec.api.SequenceEncoder;

public class SimpleVideoCreator {

    public static void main(String[] args) {
        // Diretório contendo as imagens que você quer incluir no vídeo
        String inputImageDir = "caminho/do/diretorio/com/as/imagens";

        // Nome do arquivo de vídeo de saída
        String outputVideoFile = "video_saida.mp4";

        // Largura e altura do vídeo
        int width = 640;
        int height = 480;

        // Taxa de quadros por segundo (FPS)
        int frameRate = 24;

        try {
            // Crie um codificador de sequência com as configurações desejadas
            SequenceEncoder encoder = new SequenceEncoder(new File(outputVideoFile), frameRate);

            // Lista os arquivos no diretório de imagens
            File dir = new File(inputImageDir);
            File[] imageFiles = dir.listFiles();

            if (imageFiles != null) {
                // Itera sobre cada arquivo de imagem
                for (File imageFile : imageFiles) {
                    // Carrega a imagem
                    BufferedImage image = javax.imageio.ImageIO.read(imageFile);
                    // Redimensiona a imagem se necessário
                    image = resizeImage(image, width, height);
                    // Adiciona a imagem ao vídeo
                    ((Object) encoder).encodeImage(image);
                }
            }

            // Fecha o codificador
            encoder.finish();
            System.out.println("Vídeo criado com sucesso: " + outputVideoFile);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Método para redimensionar a imagem
    private static BufferedImage resizeImage(BufferedImage originalImage, int targetWidth, int targetHeight) {
        BufferedImage resizedImage = new BufferedImage(targetWidth, targetHeight, BufferedImage.TYPE_INT_ARGB);
        resizedImage.getGraphics().drawImage(originalImage, 0, 0, targetWidth, targetHeight, null);
        return resizedImage;
    }
}
