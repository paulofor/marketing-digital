package gerador.criaebookparaproduto.passo.pdf;

import java.io.FileOutputStream;
import java.util.List;

import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Paragraph;
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
	            PdfWriter.getInstance(document, new FileOutputStream(arquivo));
	            document.open();

	            //Font fonteTermo = new Font(Font.FontFamily.TIMES_ROMAN, 18, Font.BOLD);
	            //Font fonteExplicacao = new Font(Font.FontFamily.TIMES_ROMAN, 12);
	            
	            Font fonteTermo = FontFactory.getFont(FontFactory.TIMES_BOLD, 18);
	            Font fonteExplicacao = FontFactory.getFont(FontFactory.TIMES_ROMAN, 12);


	            for (ProdutoProprioItemNivel1 pagina : this.listaItem) {
	                // Adiciona termo em destaque
	                Paragraph termoParagrafo = new Paragraph(this.getTermo(pagina), fonteTermo);
	                termoParagrafo.setAlignment(Element.ALIGN_CENTER);
	                document.add(termoParagrafo);

	                //document.add(new Paragraph(10f));
	                document.add(Chunk.NEWLINE);
	                
	                // Adiciona explicacao abaixo do termo
	                Paragraph explicacaoParagrafo = new Paragraph(this.getExplicacao(pagina), fonteExplicacao);
	                document.add(explicacaoParagrafo);
	                
	                document.add(Chunk.NEWLINE);
	                Paragraph historico = new Paragraph(this.getHistorico(pagina), fonteExplicacao);
	                document.add(historico);

	                // Adiciona uma quebra de página entre as páginas
	                document.newPage();
	            }

	            document.close();
	            System.out.println("PDF criado com sucesso!");

	        } catch (DocumentException e) {
	            e.printStackTrace();
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	}

	

}
