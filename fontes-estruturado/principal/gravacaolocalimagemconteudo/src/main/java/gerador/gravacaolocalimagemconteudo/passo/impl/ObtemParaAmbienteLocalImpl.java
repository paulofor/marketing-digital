package gerador.gravacaolocalimagemconteudo.passo.impl;


import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.DecimalFormat;
import java.util.List;

import br.com.gersis.loopback.modelo.ConteudoProdutoKiwify;
import br.com.gersis.loopback.modelo.EntregavelProduto;
import br.com.gersis.loopback.modelo.ImagemConteudo;
import gerador.gravacaolocalimagemconteudo.passo.ObtemParaAmbienteLocal;



public class ObtemParaAmbienteLocalImpl extends ObtemParaAmbienteLocal {

	
	private String PATH_IMAGENS = "/var/www/marketingpalf.shop/www/imagens";
	private String SSH_HOST = "191.252.92.222";
	private String SSH_USER = "root";
	private int SSH_PORT = 22;
	private String TEMP_FILE = "imagens";
	private String PREFIXO_URL = "https://www.marketingpalf.shop/imagens";

	@Override
	protected boolean executaCustom(EntregavelProduto entregavelCorrente, List<ConteudoProdutoKiwify> conteudoLista) {
		try {
			limpaDiretorio(entregavelCorrente.getDiretorioGravacaoLocal());
			for (ConteudoProdutoKiwify conteudo : conteudoLista) {
				if (conteudo.getImagemConteudos().size()==1) {
					obtemImagem(entregavelCorrente,conteudo);
				}
				
			}
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	
	
	
	private void obtemImagem(EntregavelProduto entregavelCorrente, ConteudoProdutoKiwify conteudo) throws IOException, InterruptedException {
		// TODO Auto-generated method stub
		ImagemConteudo imagem = conteudo.getImagemConteudos().get(0);

		DecimalFormat df = new DecimalFormat("00");
		String numeroString = df.format(conteudo.getOrdenacao());
		String imageUrl = imagem.getUrlFinal();
		String outputFileName = entregavelCorrente.getDiretorioGravacaoLocal() + "/" + numeroString + "-" + conteudo.getNome() + ".jpg"; 
		// Obter a imagem da URL
		URL url = new URL(imageUrl);
		InputStream inputStream = url.openStream();
		OutputStream outputStream = new FileOutputStream(outputFileName);

		byte[] buffer = new byte[2048];
		int length;

		while ((length = inputStream.read(buffer)) != -1) {
			outputStream.write(buffer, 0, length);
		}

		inputStream.close();
		outputStream.close();

		// Executar o comando convert para converter a imagem para JPG
		ProcessBuilder processBuilder = new ProcessBuilder("convert", outputFileName, "-quality", "80", outputFileName);
		Process process = processBuilder.start();

		int exitCode = process.waitFor();

		if (exitCode == 0) {
			System.out.println("Imagem " + outputFileName + " convertida para JPG com sucesso!");
		} else {
			System.err.println("Erro ao converter a imagem para JPG.");
		}

	}




	private void limpaDiretorio(String diretorio) {
		// Listar todos os arquivos no diretório
        File folder = new File(diretorio);
        File[] files = folder.listFiles();

        if (files != null) {
            for (File file : files) {
                if (file.isFile()) {
                    // Verificar se é uma imagem (pode ajustar os tipos de imagem conforme necessário)
                    if (file.getName().toLowerCase().endsWith(".jpg") ||
                        file.getName().toLowerCase().endsWith(".jpeg") ||
                        file.getName().toLowerCase().endsWith(".png") ||
                        file.getName().toLowerCase().endsWith(".gif")) {
                        // Excluir o arquivo de imagem
                        if (file.delete()) {
                            System.out.println("Imagem apagada: " + file.getName());
                        } else {
                            System.out.println("Falha ao apagar a imagem: " + file.getName());
                        }
                    }
                }
            }
        }
	}


}

