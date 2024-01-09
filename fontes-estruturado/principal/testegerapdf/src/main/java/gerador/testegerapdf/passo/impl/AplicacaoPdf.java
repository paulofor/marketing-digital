package gerador.testegerapdf.passo.impl;

import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.VBox;
import javafx.scene.text.Text;
import javafx.stage.Stage;


public class AplicacaoPdf  extends Application{

	  @Override
	    public void start(Stage primaryStage) {
	        // Imagem da ficha
	        Image imagem = new Image("caminho/para/sua/imagem.jpg");
	        ImageView imageView = new ImageView(imagem);
	        imageView.setFitWidth(200); // Ajuste o tamanho da imagem conforme necessário
	        imageView.setFitHeight(150);

	        // Título
	        Text titulo = new Text("Título da Ficha");
	        titulo.setStyle("-fx-font-size: 18px; -fx-font-weight: bold;");

	        // Descrição
	        Text descricao = new Text("Breve descrição ou resumo do conteúdo da ficha.");

	        // Exemplo
	        Text exemplo = new Text("Exemplo: Citação, exemplo prático ou ilustração relevante.");

	        // Categoria
	        Text categoria = new Text("Categoria: Marketing Digital");

	        // Layout da ficha
	        VBox fichaLayout = new VBox(10); // Espaçamento entre os elementos
	        fichaLayout.setPadding(new Insets(20));
	        fichaLayout.getChildren().addAll(imageView, titulo, descricao, exemplo, categoria);

	        Scene scene = new Scene(fichaLayout, 300, 400); // Ajuste o tamanho da cena conforme necessário

	        primaryStage.setTitle("Ficha");
	        primaryStage.setScene(scene);
	        primaryStage.show();
	    }

}
