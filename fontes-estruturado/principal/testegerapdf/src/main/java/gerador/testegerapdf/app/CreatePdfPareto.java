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

public class CreatePdfPareto {
    public static void main(String[] args) {
        try {
            // Caminho para salvar o PDF
            String dest = "Capitulo_Pareto.pdf";
            
            // Criando o PdfWriter
            PdfWriter writer = new PdfWriter(dest);
            
            // Inicializando o PdfDocument
            PdfDocument pdf = new PdfDocument(writer);
            
            // Criando o Document
            Document document = new Document(pdf);
            
            // Carregando a fonte Helvetica (incluindo a dependência pdffonts)
            PdfFont font = PdfFontFactory.createFont("Helvetica", PdfFontFactory.EmbeddingStrategy.PREFER_EMBEDDED);
            PdfFont boldFont = PdfFontFactory.createFont("Helvetica-Bold", PdfFontFactory.EmbeddingStrategy.PREFER_EMBEDDED);
            
            // Adicionando o título da página
            Paragraph title = new Paragraph("Capítulo 1: O Princípio de Pareto")
                    .setFont(boldFont)
                    .setFontSize(24)
                    .setTextAlignment(TextAlignment.CENTER);
            document.add(title);
            
            // Adicionando o subtítulo
            Paragraph subtitle = new Paragraph("A Chave para Reduzir o Estresse e Organizar sua Vida")
                    .setFont(boldFont)
                    .setFontSize(18)
                    .setTextAlignment(TextAlignment.CENTER);
            document.add(subtitle);
            
            // Adicionando um espaço
            document.add(new Paragraph("\n"));
            
            // Adicionando o nome do autor
            Paragraph author = new Paragraph("by Paulo Forestieri")
                    .setFont(font)
                    .setFontSize(12)
                    .setTextAlignment(TextAlignment.RIGHT);
            document.add(author);
            
            // Adicionando um espaço
            document.add(new Paragraph("\n"));
            
            // Texto introdutório
            Paragraph intro = new Paragraph("Vivemos em uma época em que as demandas parecem intermináveis. "
                    + "Do trabalho aos compromissos pessoais, estamos constantemente lidando com um fluxo crescente de tarefas e responsabilidades. "
                    + "Muitas vezes, essa sensação de estar sempre ocupado, mas nunca produtivo o suficiente, gera um nível de estresse que pode impactar nossa saúde mental e bem-estar.")
                    .setFont(font)
                    .setFontSize(12)
                    .setTextAlignment(TextAlignment.JUSTIFIED);
            document.add(intro);
            
            // Adicionando uma quebra de página
            document.add(new Paragraph("\n\n\n\n\n\n\n"));
            
            // Seção: O que é o Princípio de Pareto?
            Paragraph sectionTitle = new Paragraph("O que é o Princípio de Pareto?")
                    .setFont(boldFont)
                    .setFontSize(16)
                    .setTextAlignment(TextAlignment.LEFT);
            document.add(sectionTitle);
            
            // Descrição do Princípio de Pareto
            Paragraph paretoDesc = new Paragraph("O Princípio de Pareto, também conhecido como regra 80/20, é uma ferramenta poderosa para organizar e gerenciar tarefas, tempo e recursos. "
                    + "Essa regra afirma que, em muitos casos, 80% dos resultados são provenientes de apenas 20% das causas ou esforços. "
                    + "Em outras palavras, a maioria dos seus resultados é gerada por uma pequena porcentagem das suas ações, enquanto o restante das suas ações tem um impacto mínimo.")
                    .setFont(font)
                    .setFontSize(12)
                    .setTextAlignment(TextAlignment.JUSTIFIED);
            document.add(paretoDesc);
            
            // Adicionando mais uma quebra de linha
            document.add(new Paragraph("\n"));
            
            // Seção: Aplicando o Princípio de Pareto
            Paragraph sectionApply = new Paragraph("Aplicando o Princípio de Pareto para Simplificar Prioridades e Reduzir a Sobrecarga")
                    .setFont(boldFont)
                    .setFontSize(16)
                    .setTextAlignment(TextAlignment.LEFT);
            document.add(sectionApply);
            
            // Lista numerada de como aplicar o princípio de Pareto
            List paretoList = new List();
            paretoList.add(new ListItem("1. Lista Completa de Tarefas: Comece escrevendo todas as suas atividades diárias e semanais em um papel ou planilha."));
            paretoList.add(new ListItem("2. Identifique o que Realmente Importa: Quais dessas atividades geram 80% dos seus resultados?"));
            paretoList.add(new ListItem("3. Eliminar ou Delegar: Ao reduzir o tempo gasto nessas atividades, você abre espaço para focar no que realmente gera resultados significativos."));
            paretoList.add(new ListItem("4. Priorize as Tarefas Mais Impactantes: Reserve os momentos de maior foco e energia para essas atividades essenciais."));
            paretoList.add(new ListItem("5. Faça Revisões Regulares: A aplicação do Princípio de Pareto é um processo contínuo."));
            
            document.add(paretoList);
            
            // Fechando o documento
            document.close();
            
            System.out.println("PDF criado com sucesso!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
