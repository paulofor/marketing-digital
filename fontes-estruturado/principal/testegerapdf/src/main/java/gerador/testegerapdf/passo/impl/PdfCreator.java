package gerador.testegerapdf.passo.impl;

import java.io.IOException;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;

public class PdfCreator {

    public void criaPdf(String titulo, String descricao, String exemplo, String categoria, String caminhoImagem) {
        PDDocument document = new PDDocument();
        PDPage page = new PDPage(PDRectangle.A4);
        document.addPage(page);

        try {
            PDImageXObject pdImage = PDImageXObject.createFromFile(caminhoImagem, document);
            float scale = 0.5f; // Ajuste o tamanho da imagem conforme necessário
            PDPageContentStream contentStream = new PDPageContentStream(document, page);

            // Adicionando imagem à página
            contentStream.drawImage(pdImage, 50, 550, pdImage.getWidth() * scale, pdImage.getHeight() * scale);

            // Adicionando texto à página
            contentStream.beginText();
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);
            contentStream.newLineAtOffset(100, 700);
            contentStream.showText("Título: " + titulo);
            contentStream.newLine();
            contentStream.showText("Descrição: " + descricao);
            contentStream.newLine();
            contentStream.showText("Exemplo: " + exemplo);
            contentStream.newLine();
            contentStream.showText("Categoria: " + categoria);
            contentStream.endText();

            contentStream.close();
            document.save("/home/usuario/aplicacoes/MarketingDigital/pagina-venda-pesquisa-desenvolvimento/recursos/arquivo.pdf");
            document.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

  
}

