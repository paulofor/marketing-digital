package gerador.montaentregavel.passo.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import br.com.gersis.loopback.modelo.EntregavelProduto;
import gerador.montaentregavel.passo.ConvertePdf;

public class ConvertePdfImpl extends ConvertePdf {

	@Override
	protected boolean executaCustom(EntregavelProduto entregavelCorrente) {
		
		String htmlFilePath =  "livro" + entregavelCorrente.getIdInteger() + ".html";
		String pdfFilePath = entregavelCorrente.getNome().replaceAll(":", " - ") + ".pdf";
		//String pdfFilePath =  "livro" + entregavelCorrente.getIdInteger() + ".pdf";
		
		try {
			// Comando para executar o wkhtmltopdf
			String[] command = { "wkhtmltopdf", // Comando do wkhtmltopdf (deve estar instalado e no PATH do sistema)
					htmlFilePath, // Caminho do arquivo HTML de entrada
					pdfFilePath // Caminho do arquivo PDF de saída
			};

			// Executa o comando
			ProcessBuilder processBuilder = new ProcessBuilder(command);
			processBuilder.redirectErrorStream(true); // Redireciona os erros para o mesmo fluxo de saída
			Process process = processBuilder.start();

			BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
			String line;
			while ((line = reader.readLine()) != null) {
			    System.out.println(line);
			}
			
			// Aguarda a conclusão do processo
			int exitCode = process.waitFor();
			if (exitCode == 0) {
				System.out.println("PDF gerado com sucesso: " + pdfFilePath);
			} else {
				System.err.println("Erro ao gerar o PDF. Código de saída: " + exitCode);
			}
			return true;
		} catch (IOException | InterruptedException e) {
			System.err.println("Erro ao executar o comando para gerar o PDF: " + e.getMessage());
			return false;
		}
	}

}
