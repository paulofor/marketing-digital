import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PrecoProdutoAfiliadoApi, ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { ProdutoAfiliadoHotmartDetalheBaseComponent } from './produto-afiliado-hotmart-detalhe-base.component';
import { PrecoProdutoAfiliadoEditComponent } from '../preco-produto-afiliado-edit/preco-produto-afiliado-edit.component';
import { ProdutoAfiliadoHotmartEditComponent } from '../produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component';
import { VersaoPaginaVendaEditComponent } from '../versao-pagina-venda-edit/versao-pagina-venda-edit.component';
import { DalleSolicitacaoImagemEditComponent } from '../dalle-solicitacao-imagem-edit/dalle-solicitacao-imagem-edit.component';

@Component({
	selector: 'app-produto-afiliado-hotmart-detalhe',
  	templateUrl: './produto-afiliado-hotmart-detalhe.component.html',
  	styleUrls: ['./produto-afiliado-hotmart-detalhe.component.css']
})
export class ProdutoAfiliadoHotmartDetalheComponent extends ProdutoAfiliadoHotmartDetalheBaseComponent {

	constructor(protected srv: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog,
			private srvPreco:PrecoProdutoAfiliadoApi) { 
		super(srv,router,dialog);
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
