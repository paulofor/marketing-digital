package gerador.testegerapdf.app;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;

public class CreatePdf {
    public static void main(String[] args) {
        String dest = "capitulo_pareto.pdf"; // Caminho onde o PDF será gerado

        try {
            // Criando um objeto PdfWriter para escrever no arquivo
            PdfWriter writer = new PdfWriter(dest);

            // Inicializando o documento PDF
            PdfDocument pdfDoc = new PdfDocument(writer);
            Document document = new Document(pdfDoc);

            // Adicionando conteúdo ao PDF
            document.add(new Paragraph("Capítulo 1: O Princípio de Pareto: A Chave para Reduzir o Estresse e Organizar sua Vida"));
            document.add(new Paragraph("\nVivemos em uma época em que as demandas parecem intermináveis..."));
            document.add(new Paragraph("\nO Princípio de Pareto: Também conhecido como a regra do 80/20, sugere que 80% dos resultados vêm de apenas 20% dos esforços."));
            document.add(new Paragraph("\nAplicando o Princípio de Pareto para Simplificar Prioridades e Reduzir a Sobrecarga..."));

            // Fechando o documento
            document.close();
            System.out.println("PDF criado com sucesso!");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

