package teste;

public class ExecutaObjeto {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ObtemFiguraPagina obj = new ObtemFiguraPagina();
		obj.setUrl("https://cursonailacademy.com/?ref=H89889583A");
		obj.setArquivoImagem("imagem/pagina.png");
		obj.executaLeitura();
	}

}
