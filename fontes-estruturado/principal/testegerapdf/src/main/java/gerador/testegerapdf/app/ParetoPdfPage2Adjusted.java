package gerador.testegerapdf.app;

import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.List;
import com.itextpdf.layout.element.ListItem;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.properties.TextAlignment;

public class ParetoPdfPage2Adjusted {
    public static void main(String[] args) {
        try {
            // Caminho onde o PDF será salvo
            String dest = "Pareto_Page2_Adjusted.pdf";

            // Criando o PdfWriter
            PdfWriter writer = new PdfWriter(dest);

            // Inicializando o PdfDocument
            PdfDocument pdf = new PdfDocument(writer);

            // Criando o Document
            Document document = new Document(pdf);

            // Definindo as fontes (Helvetica e Helvetica-Bold)
            PdfFont font = PdfFontFactory.createFont("Helvetica", PdfFontFactory.EmbeddingStrategy.PREFER_EMBEDDED);
            PdfFont boldFont = PdfFontFactory.createFont("Helvetica-Bold", PdfFontFactory.EmbeddingStrategy.PREFER_EMBEDDED);

            // Título da página
            Paragraph title = new Paragraph("O que é o Princípio de Pareto?")
                    .setFont(boldFont)
                    .setFontSize(16)
                    .setTextAlignment(TextAlignment.LEFT)
                    .setMarginBottom(10);
            document.add(title);

            // Parágrafo explicando o Princípio de Pareto
            Paragraph description = new Paragraph("O Princípio de Pareto, também conhecido como regra 80/20, é uma ferramenta poderosa para organizar e gerenciar tarefas, tempo e recursos. "
                    + "Essa regra afirma que, em muitos casos, 80% dos resultados são provenientes de apenas 20% das causas ou esforços. "
                    + "Em outras palavras, a maioria dos seus resultados é gerada por uma pequena porcentagem das suas ações, enquanto o restante das suas ações tem um impacto mínimo.")
                    .setFont(font)
                    .setFontSize(12)
                    .setTextAlignment(TextAlignment.JUSTIFIED)
                    .setMarginBottom(15);
            document.add(description);

            // Adicionando uma quebra de linha
            document.add(new Paragraph("\n"));

            // Seção de aplicação do Princípio de Pareto
            Paragraph applyTitle = new Paragraph("Aplicando o Princípio de Pareto para Simplificar Prioridades e Reduzir a Sobrecarga")
                    .setFont(boldFont)
                    .setFontSize(16)
                    .setTextAlignment(TextAlignment.LEFT)
                    .setMarginBottom(10);
            document.add(applyTitle);

            // Lista numerada de aplicação do Princípio de Pareto
            List paretoList = new List()
                    .setFont(font)
                    .setFontSize(12)
                    .setSymbolIndent(12)
                    .setListSymbol("")
                    .setTextAlignment(TextAlignment.JUSTIFIED);

            // Adicionando itens à lista
            paretoList.add(new ListItem("1. Lista Completa de Tarefas: Comece escrevendo todas as suas atividades diárias e semanais em um papel ou planilha."));
            paretoList.add(new ListItem("2. Identifique o que Realmente Importa: Quais dessas atividades geram 80% dos seus resultados?"));
            paretoList.add(new ListItem("3. Eliminar ou Delegar: Ao reduzir o tempo gasto nessas atividades, você abre espaço para focar no que realmente gera resultados significativos."));
            paretoList.add(new ListItem("4. Priorize as Tarefas Mais Impactantes: Reserve os momentos de maior foco e energia para essas atividades essenciais."));
            paretoList.add(new ListItem("5. Faça Revisões Regulares: A aplicação do Princípio de Pareto é um processo contínuo."));

            document.add(paretoList);

            // Fechando o documento
            document.close();

            System.out.println("PDF gerado com sucesso!");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

