package gerador.criaebookparaproduto.passo.impl;

import java.io.IOException;
import java.util.List;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.json.JSONObject;

import br.com.gersis.loopback.modelo.ProdutoProprio;
import br.com.gersis.loopback.modelo.ProdutoProprioItemNivel1;
import gerador.criaebookparaproduto.passo.CriaLivroPdf;
import gerador.criaebookparaproduto.passo.pdf.GeradoriText;

public class CriaLivroPdfImpl extends CriaLivroPdf {

	@Override
	protected boolean executaCustom(ProdutoProprio produto, List<ProdutoProprioItemNivel1> listaItem) {
		this.criaPdf(listaItem);
		GeradoriText gerador = new GeradoriText(produto, listaItem);
		gerador.geraArquivo();
		return true;
	}

	public void criaPdf(List<ProdutoProprioItemNivel1> listaItem) {
		PDDocument document = new PDDocument();

		for (ProdutoProprioItemNivel1 item : listaItem) {
			JSONObject dado = new JSONObject(item.getJson());
			PDPage page = new PDPage(PDRectangle.A4);
			document.addPage(page);

			try {
				// PDImageXObject pdImage =
				// PDImageXObject.createFromFile(dados.getCaminhoImagem(), document);
				float scale = 0.5f; // Ajuste o tamanho da imagem conforme necessário
				PDPageContentStream contentStream = new PDPageContentStream(document, page);

				// Adicionando imagem à página
				// contentStream.drawImage(pdImage, 50, 550, pdImage.getWidth() * scale,
				// pdImage.getHeight() * scale);

				// Adicionando texto à página
				contentStream.beginText();
				contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);
				contentStream.newLineAtOffset(100, 700);
				contentStream.showText("Título: " + item.getNome());
				contentStream.newLine();
				contentStream.showText("Descrição: " + limparTexto(dado.getString("explicacao")));
				contentStream.newLine();
				// contentStream.showText("Exemplo: " + dados.getExemplo());
				// contentStream.newLine();
				// contentStream.showText("Categoria: " + dados.getCategoria());
				// contentStream.endText();

				contentStream.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		try {
			document.save(
					"/home/usuario/aplicacoes/MarketingDigital/pagina-venda-pesquisa-desenvolvimento/recursos/arquivo.pdf");
			document.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	private String limparTexto(String texto) {
	    // Substituir quebras de linha por espaços em branco
	    texto = texto.replaceAll("\\r|\\n", " ");
	    texto = texto.replace("\u200B", " ");
	    return texto;
	}
}
