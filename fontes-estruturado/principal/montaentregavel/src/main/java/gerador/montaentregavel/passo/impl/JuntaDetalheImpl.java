package gerador.montaentregavel.passo.impl;

import java.awt.Graphics2D;
import java.awt.geom.AffineTransform;
import java.awt.image.BufferedImage;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import org.xhtmlrenderer.swing.Java2DRenderer;
import org.xhtmlrenderer.util.FSImageWriter;

import br.com.gersis.loopback.modelo.EntregavelCapitulo;
import br.com.gersis.loopback.modelo.EntregavelCapituloDetalhe;
import br.com.gersis.loopback.modelo.EntregavelProduto;
import gerador.montaentregavel.passo.JuntaDetalhe;

public class JuntaDetalheImpl extends JuntaDetalhe {

	@Override
	protected boolean executaCustom(EntregavelProduto entregavelCorrente) {

		String filePath = "livro" + entregavelCorrente.getIdInteger() + ".html";

		String[] titulos = entregavelCorrente.getNome().split(":");
		String coverTitle = (titulos.length == 2 ? splitTitleForLineBreak(titulos[0]) : titulos[0]);
		
		String coverSubtitle = (titulos.length == 2 ? titulos[1] : "");
		String coverImageUrl = entregavelCorrente.getUrlImagemCapa();
		BufferedWriter writer = null;
		try {
			writer = new BufferedWriter(new FileWriter(filePath));
			// Escreve o início do HTML
			writer.write("<!DOCTYPE html>\n");
			writer.write("<html>\n");
			writer.write("<head>\n");
			writer.write("    <meta charset=\"UTF-8\">\n"); // Define a codificação como UTF-8
			writer.write("    <title>" + entregavelCorrente.getNome() + "</title>\n");
			writer.write("    <style>\n");
			writer.write("        @page {\n");
			writer.write("            margin: 0;\n"); // Remove margens para a capa ocupar toda a página
			writer.write("        }\n");
			writer.write("        body {\n");
			writer.write("            font-family: \"Times New Roman\", serif;\n");
			writer.write("            font-size: 14pt;\n");
			writer.write("            line-height: 1.8;\n");
			writer.write("            color: #333;\n");
			writer.write("            margin: 0;\n");
			writer.write("            padding: 0;\n");
			writer.write("        }\n");
			writer.write("        /* Estilo para a capa */\n");
			writer.write("        .cover {\n");
			writer.write("            page-break-after: always; /* Garante que o conteúdo começa em nova página */\n");
			writer.write("            width: 100%;\n");
			writer.write("            height: 100vh;\n");
			writer.write("            display: flex;\n");
			writer.write("            flex-direction: column;\n");
			writer.write("            justify-content: center;\n");
			writer.write("            align-items: center;\n");
			writer.write("            text-align: center;\n");
			writer.write("            background-color: #f8f8f8;\n");
			writer.write("            padding: 20px;\n");
			writer.write("        }\n");
			writer.write("        .cover h1 {\n");
			writer.write("            font-size: 62pt;\n"); // Maior destaque
			writer.write("            font-weight: bold;\n");
			writer.write("            margin-bottom: 20px;\n");
			writer.write("            color: #2E86C1; /* Azul vibrante */\n");
			writer.write("            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n"); // Sombra para destaque
			writer.write("        }\n");
			writer.write("        .cover h2 {\n");
			writer.write("            font-size: 40pt;\n"); // Maior subtítulo
			writer.write("            font-weight: normal;\n");
			writer.write("            margin-bottom: 40px;\n");
			writer.write("            color: #117A65; /* Verde escuro */\n");
			writer.write("            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);\n");
			writer.write("        }\n");
			writer.write("        .cover img {\n");
			writer.write("            max-width: 80%;\n");
			writer.write("            max-height: 50vh;\n");
			writer.write("            object-fit: contain;\n");
			writer.write("            border: 1px solid #ccc;\n");
			writer.write("            border-radius: 10px;\n");
			writer.write("            margin-top: 20px;\n");
			writer.write("        }\n");
			writer.write("        /* Cada seção representa um capítulo */\n");
			writer.write("        section {\n");
			writer.write("            page-break-before: always;\n");
			writer.write("            margin: 2cm 1cm 2cm 1cm;\n");
			writer.write("            padding: 0;\n");
			writer.write("        }\n");
			writer.write("        section h1 {\n");
			writer.write("            counter-increment: chapter;\n");
			writer.write("            font-size: 28pt;\n");
			writer.write("            font-weight: bold;\n");
			writer.write("            text-align: center;\n");
			writer.write("            margin-bottom: 1.5cm;\n");
			writer.write("            color: #000;\n");
			writer.write("            text-transform: uppercase;\n");
			writer.write("        }\n");
			writer.write("        section h1::before {\n");
			writer.write("            content: \"Capítulo \" counter(chapter) \": \";\n");
			writer.write("            display: block;\n");
			writer.write("            font-size: 24pt;\n");
			writer.write("            font-weight: normal;\n");
			writer.write("            color: #555;\n");
			writer.write("            margin-bottom: 0.5cm;\n");
			writer.write("        }\n");
			writer.write("        section h2 {\n");
			writer.write("            font-size: 22pt;\n");
			writer.write("            font-weight: bold;\n");
			writer.write("            text-align: left;\n");
			writer.write("            margin: 1.5cm 0 0.8cm 0;\n");
			writer.write("            color: #444;\n");
			writer.write("        }\n");
			writer.write("        section p {\n");
			writer.write("            text-align: justify;\n");
			writer.write("            font-size: 16pt;\n");
			writer.write("            margin: 0 0 1em 0;\n");
			writer.write("        }\n");
			writer.write("        body {\n");
			writer.write("            counter-reset: chapter;\n");
			writer.write("        }\n");
			writer.write("    </style>\n");
			writer.write("</head>\n");
			writer.write("<body>\n");

			// Adiciona a capa ao arquivo
			writer.write("<div class=\"cover\">\n");
			writer.write("    <h1>" + coverTitle + "</h1>\n");
			writer.write("    <h2>" + coverSubtitle + "</h2>\n");
			writer.write("    <img src=\"" + coverImageUrl + "\" alt=\"Imagem da Capa\">\n");
			writer.write("</div>\n");

			for (EntregavelCapitulo capitulo : entregavelCorrente.getEntregavelCapitulos()) {
				System.out.println(capitulo.getNumero() + "." + capitulo.getNome());
				for (EntregavelCapituloDetalhe detalhe : capitulo.getEntregavelCapituloDetalhes()) {
					System.out.println("Adicionou detalhe");
					writer.write(detalhe.getHtml());
					writer.write("\n"); // Adiciona uma quebra de linha para organização
				}
			}
			// Escreve o final do HTML
			writer.write("</body>\n");
			writer.write("</html>\n");

			writer.close();
			System.out.println("Arquivo HTML gerado com sucesso em: " + filePath);
			geraTitulo2(entregavelCorrente,  titulos[0], coverSubtitle);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}

	private void geraTitulo(String coverTitle, String coverSubtitle) throws IOException {

		String filePath = "titulo.html";
		// String outputHtmlPath = "caminho/para/titulo.html";
		BufferedWriter writer = null;
		writer = new BufferedWriter(new FileWriter(filePath));
		// Escreve o início do HTML
		writer.write("<!DOCTYPE html>\n");
		writer.write("<html>\n");
		writer.write("<head>\n");
		writer.write("    <meta charset=\"UTF-8\"></meta>\n"); // Define a codificação como UTF-8
		writer.write("    <title>" + coverTitle + "</title>\n");
		writer.write("    <style>\n");
		writer.write("        @page {\n");
		writer.write("            margin: 0;\n"); // Remove margens para a capa ocupar toda a página
		writer.write("        }\n");
		writer.write("        body {\n");
		writer.write("            font-family: \"Times New Roman\", serif;\n");
		writer.write("            font-size: 14pt;\n");
		writer.write("            line-height: 1.8;\n");
		writer.write("            color: #333;\n");
		writer.write("            margin: 0;\n");
		writer.write("            padding: 0;\n");
		writer.write("        }\n");
		writer.write("        /* Estilo para a capa */\n");
		writer.write("        .cover {\n");
		writer.write("            page-break-after: always; /* Garante que o conteúdo começa em nova página */\n");
		writer.write("            width: 100%;\n");
		writer.write("            height: 100vh;\n");
		writer.write("            display: flex;\n");
		writer.write("            flex-direction: column;\n");
		writer.write("            justify-content: center;\n");
		writer.write("            align-items: center;\n");
		writer.write("            text-align: center;\n");
		writer.write("            background-color: #f8f8f8;\n");
		writer.write("            padding: 20px;\n");
		writer.write("        }\n");
		writer.write("        .titulo {\n");
		writer.write("            font-size: 52pt;\n"); // Maior destaque
		writer.write("            font-weight: bold;\n");
		writer.write("            margin-bottom: 0px;\n");
		writer.write("            margin-top: 0px;\n");
		writer.write("            color: #2E86C1; /* Azul vibrante */\n");
		writer.write("            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n"); // Sombra para destaque
		writer.write("        }\n");
		writer.write("        .subtitulo {\n");
		writer.write("            font-size: 30pt;\n"); // Maior subtítulo
		writer.write("            font-weight: normal;\n");
		writer.write("            margin-bottom: 0px;\n");
		writer.write("            margin-top: 0px;\n");
		writer.write("            color: #117A65; /* Verde escuro */\n");
		writer.write("            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);\n");
		writer.write("        }\n");
		writer.write("    </style>\n");
		writer.write("</head>\n");
		writer.write("<body>\n");

		// Adiciona a capa ao arquivo
		writer.write("<div class=\"cover\">\n");
		writer.write("    <p class=\"titulo\">" + coverTitle + "</p>\n");
		writer.write("    <p class=\"subtitulo\">" + coverSubtitle + "</p>\n");
		writer.write("</div>\n");
		// Escreve o final do HTML
		writer.write("</body>\n");
		writer.write("</html>\n");

		writer.close();

	}

	private void geraTitulo2(EntregavelProduto entregavelCorrente, String coverTitle, String coverSubtitle)
			throws IOException {
		int imageWidth = 1200; // Largura da imagem
		int imageHeight = 200; // Altura da imagem
		String filePath = "titulo.html";
		String outputImagePath = "lateral" + entregavelCorrente.getIdInteger() + ".jpg";
		// String outputHtmlPath = "caminho/para/titulo.html";
		String htmlContent =
				// Escreve o início do HTML
				"<!DOCTYPE html>\n" + "<html>\n" + "<head>\n" + "<meta charset=\"UTF-8\"></meta>\n" + "    <title>"
						+ coverTitle + "</title>\n" + "    <style>\n" + "        @page {\n" + "            margin: 0;\n"
						+ // Remove margens para a capa ocupar toda a página
						"        }\n" + "        body {\n" + "            font-family: \"Times New Roman\", serif;\n"
						+ "            font-size: 14pt;\n" + "            line-height: 1.8;\n"
						+ "            color: #333;\n" + "            margin: 0;\n" + "            padding: 0;\n"
						+ "        }\n" + "        /* Estilo para a capa */\n" + "        .cover {\n"
						+ "            page-break-after: always; /* Garante que o conteúdo começa em nova página */\n"
						+ "            width: 100%;\n" + "            height: 100vh;\n" + "            display: flex;\n"
						+ "            flex-direction: column;\n" + "            justify-content: center;\n"
						+ "            align-items: center;\n" + "            text-align: center;\n"
						+ "            background-color: #f8f8f8;\n" + "            padding: 20px;\n" + "        }\n"
						+ "        .titulo {\n" + "            font-size: 68pt;\n" + // Maior destaque
						"            font-weight: bold;\n" + "            margin-bottom: 0px;\n"
						+ "            margin-top: 0px;\n" + "            color: #2E86C1; /* Azul vibrante */\n"
						+ "            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3 );\n" + // Sombra para destaque
						"        }\n" + 
						"        .subtitulo {\n" + 
						"            font-size: 48pt;\n" + // Maior subtítulo
						"            font-weight: normal;\n" + 
						"            margin-bottom: 4px;\n"	+ 
						"            margin-top: -4px;\n" + 
						"            color: #117A65; /* Verde escuro */\n"
						+ "            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2 );\n" + "        }\n"
						+ "    </style>\n" + "</head>\n" + "<body>\n" +

						// Adiciona a capa ao arquivo
						"<div class=\"cover\">\n" + "    <p class=\"titulo\">" + coverTitle + "</p>\n"
						+ "    <p class=\"subtitulo\">" + coverSubtitle + "</p>\n" + "</div>\n" +
						// Escreve o final do HTML
						"</body>\n" + "</html>\n";

		// Gera o arquivo HTML temporário
		File tempHtmlFile = File.createTempFile("temp", ".html");
		//tempHtmlFile.deleteOnExit();
		java.nio.file.Files.writeString(tempHtmlFile.toPath(), htmlContent);
		
		   // Imprime o caminho do arquivo temporário
        System.out.println("Arquivo HTML temporário criado em: " + tempHtmlFile.getAbsolutePath());


		// Renderiza o HTML como imagem
		Java2DRenderer renderer = new Java2DRenderer(tempHtmlFile, 1200, 200);
		BufferedImage image = renderer.getImage();
		image = this.rotateImage90Degrees(image);
		// Salva a imagem como JPG
		FSImageWriter imageWriter = new FSImageWriter();
		imageWriter.write(image,  "lateral" + entregavelCorrente.getIdInteger() + "_1200x200.jpg");
		
		
		// Renderiza o HTML como imagem
		renderer = new Java2DRenderer(tempHtmlFile, 1400, 200);
		image = renderer.getImage();
		//image = this.rotateImage90Degrees(image);
		// Salva a imagem como JPG
		imageWriter = new FSImageWriter();
		imageWriter.write(image,  "lateral" + entregavelCorrente.getIdInteger() + "_1400x200.jpg");

		System.out.println("Imagem gerada com sucesso: " + outputImagePath);

	}

	// Método para dividir o título com uma quebra de linha
	private static String splitTitleForLineBreak(String title) {
		if (title.length() <= 28)
			return title;
		String[] words = title.split(" ");
		int mid = (words.length / 2) + 5; // Encontra o ponto médio
		StringBuilder firstLine = new StringBuilder();
		StringBuilder secondLine = new StringBuilder();

		for (int i = 0; i < words.length; i++) {
			if (i < mid) {
				firstLine.append(words[i]).append(" ");
			} else {
				secondLine.append(words[i]).append(" ");
			}
		}

		return firstLine.toString().trim() + "<br>" + secondLine.toString().trim();
	}

	private static BufferedImage rotateImage90Degrees(BufferedImage originalImage) {
		int width = originalImage.getWidth();
		int height = originalImage.getHeight();

		// Cria uma nova imagem com largura e altura invertidas
		BufferedImage rotatedImage = new BufferedImage(height, width, originalImage.getType());

		// Configura o Graphics2D para rotação
		Graphics2D g2d = rotatedImage.createGraphics();

		// Transforma a imagem para 90 graus no sentido horário
		AffineTransform transform = new AffineTransform();
		transform.translate(height / 2.0, width / 2.0); // Centraliza o ponto de rotação
		transform.rotate(Math.PI / 2); // Rotação de 90 graus (π/2 radianos)
		transform.translate(-width / 2.0, -height / 2.0); // Move de volta para a origem

		// Aplica a transformação
		g2d.setTransform(transform);
		g2d.drawImage(originalImage, 0, 0, null);
		g2d.dispose();

		return rotatedImage;
	}

}
