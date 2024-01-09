package criaproduto.app;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;
import org.apache.pdfbox.pdmodel.font.PDType1Font;

import java.io.IOException;

public class PDFCreatorWithoutUI {

    public static void main(String[] args) {
        try {
            PDDocument document = new PDDocument();
            PDPage page = new PDPage(PDRectangle.A4);
            document.addPage(page);

            // Caminho da imagem fornecido
            String caminhoImagem = "/home/usuario/aplicacoes/MarketingDigital/pagina-venda-pesquisa-desenvolvimento/recursos/257gbaq.png";
            PDImageXObject pdImage = PDImageXObject.createFromFile(caminhoImagem, document);
            float scale = 0.5f;

            PDPageContentStream contentStream = new PDPageContentStream(document, page);
            contentStream.drawImage(pdImage, 50, 550, pdImage.getWidth() * scale, pdImage.getHeight() * scale);
            contentStream.close();

            contentStream = new PDPageContentStream(document, page, PDPageContentStream.AppendMode.APPEND, true);
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 16);
            contentStream.beginText();

            // Posicionamento das linhas de texto
            contentStream.newLineAtOffset(150, 700);
            contentStream.showText("Título: Meu Título");

            contentStream.newLineAtOffset(0, -40);
            contentStream.showText("Descrição: Minha Descrição");

            contentStream.newLineAtOffset(0, -40);
            contentStream.showText("Exemplo: Meu Exemplo");

            contentStream.newLineAtOffset(0, -40);
            contentStream.showText("Categoria: Minha Categoria");

            contentStream.endText();
            contentStream.close();

            // Caminho de saída do arquivo PDF
            String caminhoSaidaPDF = "/home/usuario/Área de Trabalho/Marketing Digital/pagina-venda-pesquisa-desenvolvimento/recursos/arquivo.pdf";
            document.save(caminhoSaidaPDF);
            document.close();

            System.out.println("PDF criado com sucesso em: " + caminhoSaidaPDF);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
