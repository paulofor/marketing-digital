import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PrecoProdutoAfiliadoApi, ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { ProdutoAfiliadoHotmartDetalheBaseComponent } from './produto-afiliado-hotmart-detalhe-base.component';
import { PrecoProdutoAfiliadoEditComponent } from '../preco-produto-afiliado-edit/preco-produto-afiliado-edit.component';
import { ProdutoAfiliadoHotmartEditComponent } from '../produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component';

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
				'include' : { 'relation' : 'produtoAfiliadoMetricas'}
			}},
			'contaGoogle',
			'precoProdutoAfiliados'
		  ]
		}
	  }
	
}
