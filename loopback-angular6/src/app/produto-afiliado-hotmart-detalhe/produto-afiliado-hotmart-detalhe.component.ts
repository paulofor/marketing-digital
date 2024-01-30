import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { IdeiaPalavraChave, IdeiaPalavraChaveApi, PrecoProdutoAfiliadoApi, ProdutoAfiliadoHotmartApi, ProdutoHotmartConta, ProdutoHotmartContaApi } from '../shared/sdk';
import { ProdutoAfiliadoHotmartDetalheBaseComponent } from './produto-afiliado-hotmart-detalhe-base.component';
import { PrecoProdutoAfiliadoEditComponent } from '../preco-produto-afiliado-edit/preco-produto-afiliado-edit.component';
import { ProdutoAfiliadoHotmartEditComponent } from '../produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component';
import { VersaoPaginaVendaEditComponent } from '../versao-pagina-venda-edit/versao-pagina-venda-edit.component';
import { DalleSolicitacaoImagemEditComponent } from '../dalle-solicitacao-imagem-edit/dalle-solicitacao-imagem-edit.component';
import { ProdutoHotmartContaEditRelComponent } from '../produto-hotmart-conta-edit-rel/produto-hotmart-conta-edit-rel.component';
import { IdeiaPalavraChaveEditComponent } from '../ideia-palavra-chave-edit/ideia-palavra-chave-edit.component';

@Component({
	selector: 'app-produto-afiliado-hotmart-detalhe',
  	templateUrl: './produto-afiliado-hotmart-detalhe.component.html',
  	styleUrls: ['./produto-afiliado-hotmart-detalhe.component.css']
})
export class ProdutoAfiliadoHotmartDetalheComponent extends ProdutoAfiliadoHotmartDetalheBaseComponent {


	listaPalavra:IdeiaPalavraChave[];
	listaConta:ProdutoHotmartConta[];

	constructor(protected srv: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog,
			private srvPreco:PrecoProdutoAfiliadoApi, private srvPalavraChave:IdeiaPalavraChaveApi, private srvProdutoConta:ProdutoHotmartContaApi) { 
		super(srv,router,dialog);
	}

	editaPalavra() {
		this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(IdeiaPalavraChaveEditComponent, {
            width: '800px',
            data: {
				origem: this.principal
            }
        });
	}

	posCarregaTela(): void {
		let filtro = { 'order' : 'mediaPesquisa desc', 'where' : {'and' : [{'hotmartId' : this.principal.hotmartId}, {'maisRecente' : 1}] } }
		this.srvPalavraChave.find(filtro)
			.subscribe((result:IdeiaPalavraChave[]) => {
				console.log('Palavra-Chave:' , result);
				this.listaPalavra = result;
			});
		let filtro2 = {'where' : {'hotmartId' : this.principal.hotmartId}, 'include' : 'contaGoogle'};
		this.srvProdutoConta.find(filtro2)
			.subscribe((result:ProdutoHotmartConta[]) => {
				console.log('ProdutoConta:' , result);
				this.listaConta = result;
			})
	}

	alteraConta() {
		this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(ProdutoHotmartContaEditRelComponent, {
            width: '800px',
            data: {
				origem: this.principal
            }
        });
	}

	editaProduto(edicao) {
		delete edicao['visitaProdutoHotmarts'];
		delete edicao['contaGoogle'];
		delete edicao['precoProdutoAfiliados'];
		this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(ProdutoAfiliadoHotmartEditComponent, {
            width: '800px',
            data: {
                item: edicao
            }
        });
	}

	atualizaPreco() {
		this.srvPreco.CalculaComissao()
			.subscribe((result) => {
				this.carregaTela();
			})
	}

	dallESolicitacao(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(DalleSolicitacaoImagemEditComponent, {
            width: '800px',
            data: {
                item: edicao,
				origem: this.principal
            }
        });
  	
	} 


	versaoPaginaVenda(edicao?) {
        this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(VersaoPaginaVendaEditComponent, {
            width: '800px',
            data: {
                item: edicao,
				origem: this.principal
            }
        });
    }

	editaPreco(edicao?) {
        this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(PrecoProdutoAfiliadoEditComponent, {
            width: '800px',
            data: {
                item: edicao,
				origem: this.principal
            }
        });
    }

	getFiltro() {
		return {
		  'include' : [
			{ 'relation' : 'visitaProdutoHotmarts' , 'scope' : {
			  	'order' : 'dataInsercao desc',
				'limit' : 4,
				'include' : { 'relation' : 'produtoAfiliadoMetricas'}
			}},
			'contaGoogle',
			'contaRemarketing',
			'precoProdutoAfiliados',
			'pixelGoogle',
			'pixelGoogleCheckout',
			'pixelGooglePaginaVenda',
			'produtoAfiliadoHotlinks',
			'dalleSolicitacaoImagems' ,
			{'relation': 'versaoPaginaVendas', 'scope' : {'include' : 'modeloPaginaVenda'}},
			{'relation' : 'publicoAlvoAdsDiarios' , 'scope' : {'where' : {'maisRecente' : 1}}}

		  ]
		}
	  }
	
}
