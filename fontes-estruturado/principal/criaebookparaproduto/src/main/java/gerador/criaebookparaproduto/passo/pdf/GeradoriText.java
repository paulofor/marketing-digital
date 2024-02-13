package gerador.criaebookparaproduto.passo.pdf;

import java.io.FileOutputStream;
import java.util.List;

import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Image;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfPageEventHelper;
import com.itextpdf.text.pdf.PdfWriter;

import br.com.gersis.loopback.modelo.ProdutoProprio;
import br.com.gersis.loopback.modelo.ProdutoProprioItemNivel1;

public class GeradoriText extends GeradorBase{

	public GeradoriText(ProdutoProprio produto, List<ProdutoProprioItemNivel1> listaItem) {
		super(produto,listaItem);
	}

	public void geraArquivo() {

	        try {
	            Document document = new Document();
	            
	            // Adiciona um evento para criar o cabeçalho em todas as páginas
	            PdfWriter writer = PdfWriter.getInstance(document, new FileOutputStream(arquivo));
	            writer.setPageEvent(new CabecalhoLivro());
	            

	            
	            document.open();

	            //Font fonteTermo = new Font(Font.FontFamily.TIMES_ROMAN, 18, Font.BOLD);
	            //Font fonteExplicacao = new Font(Font.FontFamily.TIMES_ROMAN, 12);
	            
	            Font fonteTermo = FontFactory.getFont(FontFactory.TIMES_BOLD, 18);
	            Font fonteExplicacao = FontFactory.getFont(FontFactory.TIMES_ROMAN, 12);
	            Font fonteTitulo = FontFactory.getFont(FontFactory.TIMES_BOLD, 12);
	            
	            // Adiciona a imagem da capa
	            String caminhoImagemCapa = "/home/usuario/aplicacoes/MarketingDigital/ebooks/imagens/50-termos-tech.png";
	            Image imagemCapa = Image.getInstance(caminhoImagemCapa);
	            imagemCapa.setAlignment(Image.ALIGN_CENTER);
	            document.add(imagemCapa);

	            for (ProdutoProprioItemNivel1 pagina : this.listaItem) {
	            	  // Adiciona título 'Descrição'
	                Paragraph descricaoTitulo = new Paragraph("Descrição", fonteTitulo);
	                descricaoTitulo.setAlignment(Element.ALIGN_CENTER);
	                document.add(descricaoTitulo);

	                // Adiciona termo em destaque
	                Paragraph termoParagrafo = new Paragraph(getTermo(pagina), fonteTermo);
	                termoParagrafo.setAlignment(Element.ALIGN_CENTER);
	                document.add(termoParagrafo);

	                // Adiciona espaço entre termo e explicação
	                document.add(Chunk.NEWLINE);

	                // Adiciona título 'Explicação'
	                Paragraph explicacaoTitulo = new Paragraph("Explicação", fonteTitulo);
	                explicacaoTitulo.setAlignment(Element.ALIGN_CENTER);
	                document.add(explicacaoTitulo);

	                // Adiciona explicação abaixo do termo
	                Paragraph explicacaoParagrafo = new Paragraph(getExplicacao(pagina), fonteExplicacao);
	                document.add(explicacaoParagrafo);

	                // Adiciona espaço entre explicação e histórico
	                document.add(Chunk.NEWLINE);

	                // Adiciona título 'Histórico'
	                Paragraph historicoTitulo = new Paragraph("Histórico", fonteTitulo);
	                historicoTitulo.setAlignment(Element.ALIGN_CENTER);
	                document.add(historicoTitulo);

	                // Adiciona histórico
	                Paragraph historico = new Paragraph(getHistorico(pagina), fonteExplicacao);
	                document.add(historico);

	                // Adiciona uma quebra de página entre as páginas
	                document.add(Chunk.NEWLINE);
	                document.newPage();
	            }

	            document.close();
	            System.out.println(arquivo);
	            System.out.println("PDF criado com sucesso!");

	        } catch (DocumentException e) {
	            e.printStackTrace();
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	}

	

}


class CabecalhoLivro extends PdfHeaderFooter {

    // Método para definir o conteúdo do cabeçalho
    @Override
    public PdfPTable getCabecalho() {
        PdfPTable table = new PdfPTable(1);
        PdfPCell cell = new PdfPCell();
        cell.setBorder(PdfPCell.NO_BORDER);

        // Adiciona o título do livro
        Font fonteTitulo = new Font(Font.FontFamily.TIMES_ROMAN, 16, Font.BOLD);
        Paragraph titulo = new Paragraph("50 Termos Tech", fonteTitulo);
        titulo.setAlignment(Element.ALIGN_CENTER);
        cell.addElement(titulo);

        table.addCell(cell);

        return table;
    }
}

class PdfHeaderFooter extends PdfPageEventHelper {

    // Método para definir o conteúdo do cabeçalho
    public PdfPTable getCabecalho() {
        PdfPTable table = new PdfPTable(1);
        // Adicione aqui o conteúdo do seu cabeçalho
        return table;
    }

    // Método chamado antes de cada página ser escrita
    @Override
    public void onEndPage(PdfWriter writer, Document document) {
        // Adiciona o cabeçalho em cada página
        PdfPTable cabecalho = getCabecalho();
        cabecalho.setTotalWidth(document.getPageSize().getWidth() - document.leftMargin() - document.rightMargin());
        cabecalho.writeSelectedRows(0, -1, document.leftMargin(), document.top() + cabecalho.getTotalHeight(), writer.getDirectContent());
    }
}
