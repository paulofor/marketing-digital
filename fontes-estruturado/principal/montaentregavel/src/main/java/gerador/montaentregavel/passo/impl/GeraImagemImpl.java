package gerador.montaentregavel.passo.impl;


import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.RenderingHints;
import java.awt.image.BufferedImage;
import java.io.File;

import javax.imageio.ImageIO;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.rendering.PDFRenderer;

import br.com.gersis.loopback.modelo.EntregavelProduto;
import gerador.montaentregavel.passo.GeraImagem;



public class GeraImagemImpl extends GeraImagem {

	@Override
	protected boolean executaCustom(EntregavelProduto entregavelCorrente) {
		
		//String pdfFilePath = "caminho/para/seu/arquivo.pdf";
	    //String outputImagePath = "caminho/para/saida.jpg";
	    int targetWidth = 800;  // Largura desejada
	    int targetHeight = 1200; // Altura desejada
		
	    String pdfFilePath = entregavelCorrente.getNome().replaceAll(":", " - ") + ".pdf";
	    String outputImagePath = "capa" + entregavelCorrente.getIdInteger() + ".jpg";
	    String imagemMembro = "membro" + entregavelCorrente.getIdInteger() + ".jpg";
	    String capa2 = "capa2" + entregavelCorrente.getIdInteger() + ".jpg";
	    
		try {
			// Carrega o documento PDF
            PDDocument document = PDDocument.load(new File(pdfFilePath));

            // Renderiza a primeira página
            PDFRenderer renderer = new PDFRenderer(document);
            BufferedImage originalImage = renderer.renderImageWithDPI(0, 300); // 300 DPI para qualidade

            // Redimensiona a imagem
            BufferedImage resizedImage = resizeImageLikePhotoshop(originalImage, 800, 1200);
            ImageIO.write(resizedImage, "PNG", new File("capa" + entregavelCorrente.getIdInteger() + "_800x1200.jpg"));


            // Redimensiona a imagem
            resizedImage = resizeImage(originalImage, 320, 480);
            ImageIO.write(resizedImage, "PNG", new File(imagemMembro));

            
            // Redimensiona a imagem
            resizedImage = resizeImage(originalImage, 1000, 1400);
            ImageIO.write(resizedImage, "PNG", new File("capa" + entregavelCorrente.getIdInteger() + "_1000x1400.jpg"));

            
            ImageIO.write(resizedImage, "PNG", new File("original" + entregavelCorrente.getIdInteger() + ".png"));
            System.out.println("Imagem gerada com sucesso: " + imagemMembro);
            
            // Fecha o documento PDF
            document.close();

			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	} 

	 // Método para redimensionar a imagem
    private static BufferedImage resizeImage(BufferedImage originalImage, int targetWidth, int targetHeight) {
        Image scaledImage = originalImage.getScaledInstance(targetWidth, targetHeight, Image.SCALE_SMOOTH);
        BufferedImage resizedImage = new BufferedImage(targetWidth, targetHeight, BufferedImage.TYPE_INT_RGB);
        Graphics2D g2d = resizedImage.createGraphics();
        g2d.drawImage(scaledImage, 0, 0, null);
        g2d.dispose();
        return resizedImage;
    }
    
    // Método para redimensionar e preencher completamente
    private static BufferedImage resizeImageFull(BufferedImage originalImage, int targetWidth, int targetHeight) {
        BufferedImage resizedImage = new BufferedImage(targetWidth, targetHeight, BufferedImage.TYPE_INT_RGB);
        Graphics2D g2d = resizedImage.createGraphics();

        // Desenha a imagem redimensionada para ocupar todo o espaço (distorce se necessário)
        g2d.drawImage(originalImage, 0, 0, targetWidth, targetHeight, null);
        g2d.dispose();
        return resizedImage;
    }

 // Método para redimensionar e preencher o espaço definido
    private static BufferedImage resizeAndFillImage(BufferedImage originalImage, int targetWidth, int targetHeight) {
        // Redimensiona a imagem para caber nas dimensões especificadas
        Image scaledImage = originalImage.getScaledInstance(targetWidth, targetHeight, Image.SCALE_SMOOTH);

        // Cria uma nova imagem com as dimensões desejadas
        BufferedImage filledImage = new BufferedImage(targetWidth, targetHeight, BufferedImage.TYPE_INT_RGB);

        // Desenha a imagem redimensionada, preenchendo todo o espaço
        Graphics2D g2d = filledImage.createGraphics();
        g2d.drawImage(scaledImage, 0, 0, targetWidth, targetHeight, null);
        g2d.dispose();

        return filledImage;
    }
    
    // Método para forçar o preenchimento do espaço definido
    private static BufferedImage stretchImageToFit(BufferedImage originalImage, int targetWidth, int targetHeight) {
        // Cria uma nova imagem com as dimensões desejadas
        BufferedImage filledImage = new BufferedImage(targetWidth, targetHeight, BufferedImage.TYPE_INT_RGB);

        // Desenha a imagem redimensionada, forçando o preenchimento completo
        Graphics2D g2d = filledImage.createGraphics();
        g2d.drawImage(originalImage, 0, 0, targetWidth, targetHeight, null);
        g2d.dispose();

        return filledImage;
    }
    
    private static BufferedImage forceImageToFill(BufferedImage originalImage, int targetWidth, int targetHeight) {
        // Cria uma nova imagem com as dimensões desejadas
        BufferedImage filledImage = new BufferedImage(targetWidth, targetHeight, BufferedImage.TYPE_INT_RGB);

        // Obtém o Graphics2D para desenhar na nova imagem
        Graphics2D g2d = filledImage.createGraphics();

        // Força o redimensionamento e preenchimento
        g2d.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BICUBIC);
        g2d.drawImage(originalImage, 0, 0, targetWidth, targetHeight, null);

        g2d.dispose();
        return filledImage;
    }
    
    private static BufferedImage resizeImageLikePhotoshop(BufferedImage originalImage, int targetWidth, int targetHeight) {
        BufferedImage resizedImage = new BufferedImage(targetWidth, targetHeight, BufferedImage.TYPE_INT_ARGB);

        Graphics2D g2d = resizedImage.createGraphics();
        g2d.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BICUBIC);
        g2d.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
        g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
        g2d.drawImage(originalImage, 0, 0, targetWidth, targetHeight, null);
        g2d.dispose();

        return resizedImage;
    }
}

