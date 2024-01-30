package gerador.criaarquivopaginavendapropria.passo.impl;


import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import br.com.gersis.loopback.modelo.PaginaVendaPropria;
import br.com.gersis.loopback.modelo.PixelProdutoHotmartConta;
import br.com.gersis.loopback.modelo.PosicaoElementoPaginaVenda;
import br.com.gersis.loopback.modelo.VersaoPaginaVenda;
import gerador.criaarquivopaginavendapropria.passo.GeraArquivoPagina;



public class GeraArquivoPaginaImpl extends GeraArquivoPagina {
	
	private final String DIRETORIO_TEMP = "/home/usuario/aplicacoes/MarketingDigital/pagina-venda-com-imagens/gerador-java";
	private final int FASE = 1;
	
	@Override
	protected boolean executaCustom(PaginaVendaPropria paginaVendaCorrente, VersaoPaginaVenda versaoPaginaCorrente) {
		String conteudoPagina = this.trocaItemVariavel(versaoPaginaCorrente);
		conteudoPagina = this.outrasTrocas(conteudoPagina, paginaVendaCorrente, versaoPaginaCorrente);
		try {
			gravaTemp(conteudoPagina);
		} catch (Exception e) {
			e.printStackTrace();
			System.exit(-1);
		}
		return true;
	}
	
	private String outrasTrocas(String conteudoPagina, PaginaVendaPropria paginaVendaCorrente,
			VersaoPaginaVenda versaoPaginaCorrente) {
		String urlImagem = paginaVendaCorrente.getImagemPaginaVenda().getUrlFinal();
		conteudoPagina = conteudoPagina.replace("---imagem---", urlImagem);
		String script = preparaScriptComCookie(paginaVendaCorrente,versaoPaginaCorrente);
		conteudoPagina = conteudoPagina.replace("---script---", script);
		String nomeProduto = versaoPaginaCorrente.getProdutoAfiliadoHotmart().getNome();
		conteudoPagina = conteudoPagina.replace("---nomeProduto---", nomeProduto);
		return conteudoPagina;
	}
	
	private String preparaScriptComCookie(PaginaVendaPropria pagina, VersaoPaginaVenda versao) {
		
		Map<String,List<PixelProdutoHotmartConta>> mapPixel = new HashMap<String,List<PixelProdutoHotmartConta>>();
		for (PixelProdutoHotmartConta pixel : versao.getProdutoAfiliadoHotmart().getPixelProdutoHotmartContas()) {
			if (pixel.getFase()==FASE) {
				List<PixelProdutoHotmartConta> listaPixel = mapPixel.get(pixel.getCodigo1());
				if (listaPixel==null) {
					listaPixel = new ArrayList<PixelProdutoHotmartConta>();
				}
				listaPixel.add(pixel);
				mapPixel.put(pixel.getCodigo1(),listaPixel);
			}
		}
		
		Set<String> codigo1 = mapPixel.keySet();
        Iterator<String> iterator = codigo1.iterator();
        String primeiroElemento = iterator.next();
		
		String texto = "";
		texto += "<script async src=\"https://www.googletagmanager.com/gtag/js?id=" + primeiroElemento + "\"></script>\n";
		texto += "<script>\n";
		texto += "window.dataLayer = window.dataLayer || [];\n";
		texto += "function gtag() { dataLayer.push(arguments); }\n";
		texto += "gtag('js', new Date());\n";
		for (String codigo : codigo1) {
			texto += "gtag('config', '" + codigo + "');\n";
			for (PixelProdutoHotmartConta pixel : mapPixel.get(codigo)) {
				texto += "gtag('event', 'conversion', { 'send_to': '" + pixel.getCodigo1() + "/" + pixel.getCodigo2() + "' });\n";
			}
		}
		texto += "</script>\n";
		texto += "\n";
		//texto += "gtag('event', 'conversion', { 'send_to': 'AW-11374828177/i0kXCJ_Jn4QZEJG1-K8q' });\n";
		texto += "<script>\n";
		texto += "\n";
		texto += "var meuCookie = null;\n";
		texto += "document.addEventListener('DOMContentLoaded', function () {\n";
		texto += "		//console.log('executando');\n";
		texto += " 		meuCookie = getCookie('digicomId');\n";
		texto += "		if (!meuCookie) {\n";
		texto += "             // Se o cookie não existir, crie-o e envie como parâmetro para o PHP\n";
		texto += "             meuCookie = generateRandomValue(); // Defina o valor desejado para o cookie\n";
		texto += "             const expirationDate = new Date('2038-01-01'); // Define uma data futura (2038, por exemplo)\n";
		texto += "             document.cookie = 'digicomId=' + meuCookie + '; expires=${expirationDate.toUTCString()}; path=/'; // Define o cookie\n";
		texto += "     	}\n";
		texto += "		fetch('https://tyche.ovh:23105/api/LoadPaginaVendaPropria/InsereItem?codigoPagina=" + pagina.getCodigoUrl() + "&visitante=' + meuCookie)\n";
		texto += "			.then(function (response) {\n";
		texto += "				//console.log('Requisição GET para a outra URL feita com sucesso.', response);\n";
		texto += "			})\n";
		texto += "			.catch(function (error) {\n";
		texto += "				//console.error('Erro ao fazer requisição GET para a outra URL:', error);\n";
		texto += "			});\n";
		texto += "});\n";
		texto += "\n";
		texto += "let fetchedPositions = {\n";
		texto += "	20: false,\n";
		texto += "	40: false,\n";
		texto += "	60: false,\n";
		texto += "	80: false \n";
		texto += "};\n";
		texto += "\n";
		texto += "function fetchScrollData(position) {\n";
		texto += "	fetch('https://tyche.ovh:23105/api/ScrollPaginaVendaPropria/InsereItem?codigoPagina=" + pagina.getCodigoUrl() + "&posicao=' + position + '&visitante=' + meuCookie)\n";
		texto += "		.then(function (response) {\n";
		texto += "			//console.log('Requisição GET para a outra URL feita com sucesso.', response);\n";
		texto += "		})\n";
		texto += "		.catch(function (error) {\n";
		texto += "			//console.error('Erro ao fazer requisição GET para a outra URL:', error);'\n";
		texto += "		});\n";
		texto += "}\n";
		texto += "\n";
		texto += "function checkScrollPercentage() {\n";
		texto += "	const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n";
		texto += "	const scrolled = window.scrollY;\n";
		texto += "	const scrollPercentage = (scrolled / totalHeight) * 100;\n";
		texto += "	if (!fetchedPositions[20] && scrollPercentage >= 20 && scrollPercentage < 30) {\n";
		texto += "		fetchScrollData(20);\n";
		texto += "		fetchedPositions[20] = true;\n";
		texto += "	} else if (!fetchedPositions[40] && scrollPercentage >= 40 && scrollPercentage < 50) {\n";
		texto += "		fetchScrollData(40);\n";
		texto += "		fetchedPositions[40] = true;\n";
		texto += "	} else if (!fetchedPositions[60] && scrollPercentage >= 60 && scrollPercentage < 70) {\n";
		texto += "		fetchScrollData(60);\n";
		texto += "		fetchedPositions[60] = true;\n";
		texto += "	} else if (!fetchedPositions[80] && scrollPercentage >= 80 && scrollPercentage < 90) {\n";
		texto += "		fetchScrollData(80);\n";
		texto += "		fetchedPositions[80] = true;\n";
		texto += "	}\n";
		texto += "}\n";
		texto += "\n";
		texto += "function throttle(callback, limit) {\n";
		texto += "	let ticking = false;\n";
		texto += "	return function () {\n";
		texto += "		if (!ticking) {\n";
		texto += "			callback.apply(this, arguments);\n";
		texto += "			ticking = true;\n";
		texto += "			setTimeout(function () {\n";
		texto += "				ticking = false;\n";
		texto += "			}, limit);\n";
		texto += "		}\n";
		texto += "	};\n";
		texto += "}\n";
		texto += "\n";
		texto += "const throttledScroll = throttle(checkScrollPercentage, 200);\n";
		texto += "window.addEventListener('scroll', throttledScroll);\n";
		texto += "function realizarFetch() {\n";
		texto += "	var queryString = window.location.search;\n";
		texto += "	queryString = queryString.replace(/^[?]/, '');\n";
		texto += "	var url = 'https://tyche.ovh:23105/api/SolicitacaoCheckoutPaginaVendaPropria/InsereItem?codigoPagina=" + pagina.getCodigoUrl() + "&visitante=' + meuCookie;\n";
		texto += "  fetch(url)\n";
		texto += "  	.then(function (response) {\n";
		texto += "      	window.location.href = '" + versao.getProdutoAfiliadoHotlink().getUrl() + "';\n";
		texto += "     	})\n";
		texto += "     	.catch(function (error) {\n";
		texto += "      	window.location.href = '" + versao.getProdutoAfiliadoHotlink().getUrl() + "';\n";
		texto += "     	});\n";
		texto += "}\n";
		texto += "function generateRandomValue() {\n";
		texto += "	const array = new Uint32Array(2);\n";
		texto += "	crypto.getRandomValues(array);\n";
		texto += "	return array[0].toString(16) + array[1].toString(16);\n";
		texto += "}\n";
		texto += "function getCookie(name) {\n";
		texto += "	const cookies = document.cookie.split(';');\n";
		texto += "	for (let i = 0; i < cookies.length; i++) {\n";
		texto += "		const cookie = cookies[i].trim();\n";
		texto += "		// Verifica se o cookie começa com o nome desejado\n";
		texto += "		if (cookie.startsWith(name + '=')) {\n";
		texto += "			return cookie.substring(name.length + 1);\n";
		texto += "		}\n";
		texto += "	}\n";
		texto += "	return null;\n";
		texto += "}\n";
		texto += "</script>\n";
		
		return texto;

	}
	
	private String preparaScript(PaginaVendaPropria pagina, VersaoPaginaVenda versao) {
		
		Map<String,List<PixelProdutoHotmartConta>> mapPixel = new HashMap<String,List<PixelProdutoHotmartConta>>();
		for (PixelProdutoHotmartConta pixel : versao.getProdutoAfiliadoHotmart().getPixelProdutoHotmartContas()) {
			if (pixel.getFase()==FASE) {
				List<PixelProdutoHotmartConta> listaPixel = mapPixel.get(pixel.getCodigo1());
				if (listaPixel==null) {
					listaPixel = new ArrayList<PixelProdutoHotmartConta>();
				}
				listaPixel.add(pixel);
				mapPixel.put(pixel.getCodigo1(),listaPixel);
			}
		}
		
		Set<String> codigo1 = mapPixel.keySet();
        Iterator<String> iterator = codigo1.iterator();
        String primeiroElemento = iterator.next();
		
		String texto = "";
		texto += "<script async src=\"https://www.googletagmanager.com/gtag/js?id=" + primeiroElemento + "\"></script>\n";
		texto += "<script>\n";
		texto += "window.dataLayer = window.dataLayer || [];\n";
		texto += "function gtag() { dataLayer.push(arguments); }\n";
		texto += "gtag('js', new Date());\n";
		for (String codigo : codigo1) {
			texto += "gtag('config', '" + codigo + "');\n";
			for (PixelProdutoHotmartConta pixel : mapPixel.get(codigo)) {
				texto += "gtag('event', 'conversion', { 'send_to': '" + pixel.getCodigo1() + "/" + pixel.getCodigo2() + "' });\n";
			}
		}
		//texto += "gtag('event', 'conversion', { 'send_to': 'AW-11374828177/i0kXCJ_Jn4QZEJG1-K8q' });\n";
		texto += "\n";
		texto += "document.addEventListener('DOMContentLoaded', function () {\n";
		texto += "		console.log('executando');\n";
		texto += "		fetch('https://tyche.ovh:23105/api/LoadPaginaVendaPropria/InsereItem?codigoPagina=" + pagina.getCodigoUrl() + "')\n";
		texto += "			.then(function (response) {\n";
		texto += "				console.log('Requisição GET para a outra URL feita com sucesso.', response);\n";
		texto += "			})\n";
		texto += "			.catch(function (error) {\n";
		texto += "				console.error('Erro ao fazer requisição GET para a outra URL:', error);\n";
		texto += "			});\n";
		texto += "});\n";
		texto += "\n";
		texto += "let fetchedPositions = {\n";
		texto += "	20: false,\n";
		texto += "	40: false,\n";
		texto += "	60: false,\n";
		texto += "	80: false \n";
		texto += "};\n";
		texto += "\n";
		texto += "function fetchScrollData(position) {\n";
		texto += "	fetch('https://tyche.ovh:23105/api/ScrollPaginaVendaPropria/InsereItem?codigoPagina=" + pagina.getCodigoUrl() + "&posicao=' + position)\n";
		texto += "		.then(function (response) {\n";
		texto += "			console.log('Requisição GET para a outra URL feita com sucesso.', response);\n";
		texto += "		})\n";
		texto += "		.catch(function (error) {\n";
		texto += "			console.error('Erro ao fazer requisição GET para a outra URL:', error);'\n";
		texto += "		});\n";
		texto += "}\n";
		texto += "\n";
		texto += "function checkScrollPercentage() {\n";
		texto += "	const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n";
		texto += "	const scrolled = window.scrollY;\n";
		texto += "	const scrollPercentage = (scrolled / totalHeight) * 100;\n";
		texto += "	if (!fetchedPositions[20] && scrollPercentage >= 20 && scrollPercentage < 30) {\n";
		texto += "		fetchScrollData(20);\n";
		texto += "		fetchedPositions[20] = true;\n";
		texto += "	} else if (!fetchedPositions[40] && scrollPercentage >= 40 && scrollPercentage < 50) {\n";
		texto += "		fetchScrollData(40);\n";
		texto += "		fetchedPositions[40] = true;\n";
		texto += "	} else if (!fetchedPositions[60] && scrollPercentage >= 60 && scrollPercentage < 70) {\n";
		texto += "		fetchScrollData(60);\n";
		texto += "		fetchedPositions[60] = true;\n";
		texto += "	} else if (!fetchedPositions[80] && scrollPercentage >= 80 && scrollPercentage < 90) {\n";
		texto += "		fetchScrollData(80);\n";
		texto += "		fetchedPositions[80] = true;\n";
		texto += "	}\n";
		texto += "}\n";
		texto += "\n";
		texto += "function throttle(callback, limit) {\n";
		texto += "	let ticking = false;\n";
		texto += "	return function () {\n";
		texto += "		if (!ticking) {\n";
		texto += "			callback.apply(this, arguments);\n";
		texto += "			ticking = true;\n";
		texto += "			setTimeout(function () {\n";
		texto += "				ticking = false;\n";
		texto += "			}, limit);\n";
		texto += "		}\n";
		texto += "	};\n";
		texto += "}\n";
		texto += "\n";
		texto += "const throttledScroll = throttle(checkScrollPercentage, 200);\n";
		texto += "window.addEventListener('scroll', throttledScroll);\n";
		texto += "function realizarFetch() {\n";
		texto += "	var queryString = window.location.search;\n";
		texto += "	queryString = queryString.replace(/^[?]/, '');\n";
		texto += "	var url = 'https://tyche.ovh:23105/api/SolicitacaoCheckoutPaginaVendaPropria/InsereItem?codigoPagina=" + pagina.getCodigoUrl() + "';\n";
		texto += "  fetch(url)\n";
		texto += "  	.then(function (response) {\n";
		texto += "      	window.location.href = '" + versao.getProdutoAfiliadoHotlink().getUrl() + "';\n";
		texto += "     	})\n";
		texto += "     	.catch(function (error) {\n";
		texto += "      	window.location.href = '" + versao.getProdutoAfiliadoHotlink().getUrl() + "';\n";
		texto += "     	});\n";
		texto += "}\n";
		texto += "</script>\n";
		
		return texto;
	}
	

	private void gravaTemp(String conteudoPagina) throws IOException {
		 File diretorioTemp = new File(DIRETORIO_TEMP);
         if (!diretorioTemp.exists()) {
             diretorioTemp.mkdirs();
         }

         // Cria o arquivo no diretório com o conteúdo da variável conteudoPagina
         File arquivoTemp = new File(diretorioTemp, "index.html");
         FileWriter writer = new FileWriter(arquivoTemp);
         writer.write(conteudoPagina);
         writer.close();
	}

	 
	
	
	private String trocaItemVariavel(VersaoPaginaVenda versao) {
		String saida = versao.getModeloPaginaVenda().getCodigoFonte();
		if (saida==null) {
			throw new RuntimeException("Modelo da Versao " + versao.getVersao() + " não tem codigo fonte.");
		}
		List<PosicaoElementoPaginaVenda> elementos = versao.getModeloPaginaVenda().getPosicaoElementoPaginaVendas();
		for (PosicaoElementoPaginaVenda elemento : elementos) {
			if (elemento.getElementoModeloPaginaVenda().getConteudoElementos().size()==1) {
				
				String nomeVariavel = elemento.getElementoModeloPaginaVenda().getNomeVariavel();
				System.out.println("Procurando..." + nomeVariavel);
				String conteudo = elemento.getElementoModeloPaginaVenda().getConteudoElementos().get(0).getValor();
				if (conteudo==null) {
					throw new RuntimeException("Não encontrou o conteúdo para : " + nomeVariavel);
				}
				conteudo = conteudo.replace("\n", "<br>");
				saida = saida.replace("---" + nomeVariavel + "---", conteudo);
			}
		}
		return saida;
	}
	


}

