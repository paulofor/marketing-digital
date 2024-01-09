package gerador.testegerapdf.passo.impl;
import java.io.File;
import java.io.IOException;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.VBox;
import javafx.stage.FileChooser;
import javafx.stage.Stage;

public class PdfCreatorGUI extends Application {

    private TextField tituloField;
    private TextField descricaoField;
    private TextField exemploField;
    private TextField categoriaField;
    private File imagemFile;

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("Criador de PDF");

        Label tituloLabel = new Label("Título:");
        tituloField = new TextField();

        Label descricaoLabel = new Label("Descrição:");
        descricaoField = new TextField();

        Label exemploLabel = new Label("Exemplo:");
        exemploField = new TextField();

        Label categoriaLabel = new Label("Categoria:");
        categoriaField = new TextField();

        Button imagemButton = new Button("Selecionar Imagem");
        imagemButton.setOnAction(e -> selecionarImagem(primaryStage));

        Button criarPdfButton = new Button("Criar PDF");
        criarPdfButton.setOnAction(e -> criarPdf());

        VBox layout = new VBox(10);
        layout.getChildren().addAll(tituloLabel, tituloField, descricaoLabel, descricaoField,
                exemploLabel, exemploField, categoriaLabel, categoriaField, imagemButton, criarPdfButton);

        Scene scene = new Scene(layout, 300, 300);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    private void selecionarImagem(Stage primaryStage) {
        FileChooser fileChooser = new FileChooser();
        fileChooser.setTitle("Selecionar Imagem");
        imagemFile = fileChooser.showOpenDialog(primaryStage);
    }

    private void criarPdf() {
        String titulo = tituloField.getText();
        String descricao = descricaoField.getText();
        String exemplo = exemploField.getText();
        String categoria = categoriaField.getText();

        if (titulo.isEmpty() || descricao.isEmpty() || exemplo.isEmpty() || categoria.isEmpty() || imagemFile == null) {
            // Verifica se todos os campos estão preenchidos
            System.out.println("Por favor, preencha todos os campos e selecione uma imagem.");
            return;
        }

        try {
            PDDocument document = new PDDocument();
            PDPage page = new PDPage(PDRectangle.A4);
            document.addPage(page);

            PDImageXObject pdImage = PDImageXObject.createFromFile(imagemFile.getAbsolutePath(), document);
            float scale = 0.5f;
            PDPageContentStream contentStream = new PDPageContentStream(document, page);

            contentStream.drawImage(pdImage, 50, 550, pdImage.getWidth() * scale, pdImage.getHeight() * scale);

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
            document.save("caminho/para/o/seu/arquivo.pdf");
            document.close();

            System.out.println("PDF criado com sucesso!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void executa(String[] args) {
        launch(args);
    }
}
