package gerador.criaaudiolegendavsl.passo.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import br.com.gersis.loopback.modelo.VideoVsl;
import gerador.criaaudiolegendavsl.passo.GeraAudioCompletoLegenda;

public class GeraAudioCompletoLegendaImpl extends GeraAudioCompletoLegenda {

	private static String PATH = "/home/usuario/aplicacoes/MarketingDigital/audio/completo";

	@Override
	protected boolean executaCustom(VideoVsl videoCorrente) {

		int tamanho = videoCorrente.getTrechoVsls().size();
		//tamanho = 2;
		String[] arquivos = new String[tamanho];
		int soma = 0;
		for (int i = 0; i < tamanho; i++) {
			arquivos[i] = videoCorrente.getTrechoVsls().get(i).getArquivoAudio();
			int duracao = this.obterDuracaoAudioEmMilissegundos(arquivos[i]) + 1;
			System.out.println(arquivos[i] + " ms: " + duracao);
			soma += duracao;
		}
		System.out.println("Total: " + soma);

		// Caminho para o arquivo de saída concatenado
		String outputFilePath = "/home/usuario/aplicacoes/MarketingDigital/audio/completo/arquivo_concatenado_" + formataNumero(videoCorrente.getIdInteger()) + ".wav";

		try {
			// Cria um processo para executar o comando FFmpeg
			// Constrói o comando FFmpeg manualmente
			StringBuilder command = new StringBuilder("sox ");
			for (String file : arquivos) {
				command.append(" ").append(file).append(" ");
			}
			command.deleteCharAt(command.length() - 1); // Remove o último "|"
			command.append(" ").append(outputFilePath);

			System.out.println("Comando:" + command.toString());

			Process processo = Runtime.getRuntime().exec(command.toString());
			int status = processo.waitFor();
			if (status == 0) {
				System.out.println("Arquivos concatenados com sucesso!");
			} else {
				System.out.println("Erro ao concatenar arquivos.");
			}

		} catch (IOException | InterruptedException e) {
			e.printStackTrace();
		}

		return true;
	}

	private String formataNumero(int numero) {
        // Converte o número para uma string
        String numeroString = Integer.toString(numero);
        
        // Verifica o comprimento da string
        int comprimento = numeroString.length();
        
        // Adiciona zeros à esquerda se necessário
        if (comprimento < 3) {
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < 3 - comprimento; i++) {
                sb.append('0');
            }
            sb.append(numeroString);
            return sb.toString();
        } else {
            return numeroString.substring(0, 3);
        }
    }

	private int obterDuracaoAudioEmMilissegundos(String nomeDoArquivo) {
        String comando = "soxi -D " + nomeDoArquivo;
        try {
            Process processo = Runtime.getRuntime().exec(comando);
            BufferedReader leitor = new BufferedReader(new InputStreamReader(processo.getInputStream()));
            String linha;
            StringBuilder saida = new StringBuilder();
            while ((linha = leitor.readLine()) != null) {
                saida.append(linha);
            }
            leitor.close();
            int status = processo.waitFor();
            if (status == 0) {
                double duracaoSegundos = Double.parseDouble(saida.toString());
                return (int) (duracaoSegundos * 1000);
            } else {
                System.out.println("Erro ao obter a duração do áudio.");
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return -1; // Retorna -1 se houver um erro
    }
}
