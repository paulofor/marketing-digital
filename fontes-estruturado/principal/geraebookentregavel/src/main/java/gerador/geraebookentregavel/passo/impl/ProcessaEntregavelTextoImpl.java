package gerador.geraebookentregavel.passo.impl;


import java.io.FileWriter;
import java.io.IOException;

import br.com.gersis.loopback.modelo.ConteudoProdutoKiwify;
import br.com.gersis.loopback.modelo.EntregavelProduto;
import br.com.gersis.loopback.modelo.ItemConteudoProduto;
import gerador.geraebookentregavel.passo.ProcessaEntregavelTexto;



public class ProcessaEntregavelTextoImpl extends ProcessaEntregavelTexto {

	@Override
	protected boolean executaCustom(EntregavelProduto entregavelCorrente) {
		// Nome do arquivo
        String fileName = "saidas/entregavel-" + entregavelCorrente.getIdLong() + ".txt";

 

        try {
            // Cria o FileWriter
            FileWriter writer = new FileWriter(fileName);

            for (ConteudoProdutoKiwify conteudo : entregavelCorrente.getConteudoProdutoKiwifys()) {
            	writer.write('\n' + "Tema : " + conteudo.getNome() + '\n');
            	
            	for (ItemConteudoProduto detalhe : conteudo.getItemConteudoProdutos()) {
            		writer.write(detalhe.getPromptItem().getTitulo() + ":\n");
            		writer.write(detalhe.getTexto() + '\n');
            	}
            }
            

            // Fecha o FileWriter
            writer.close();

            System.out.println("Arquivo escrito com sucesso!");
        } catch (IOException e) {
            // Trata exceção em caso de erro
            e.printStackTrace();
        }
		return true;
	} 


}

