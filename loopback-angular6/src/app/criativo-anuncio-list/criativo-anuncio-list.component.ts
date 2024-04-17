import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CriativoAnuncioApi, ProdutoProprio } from '../shared/sdk';
import { CriativoAnuncioListBaseComponent } from './criativo-anuncio-list-base.component';

@Component({
	selector: 'app-criativo-anuncio-list',
  	templateUrl: './criativo-anuncio-list.component.html',
  	styleUrls: ['./criativo-anuncio-list.component.css']
})
export class CriativoAnuncioListComponent extends CriativoAnuncioListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: CriativoAnuncioApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}



	getFiltro() {
		let filtro =  {
			'where' : {'produtoProprioId' : this.produto.id},
			'include' : ['imagemPaginaVenda','fonteLocal']
		};
		console.log('filtro-produto:' , filtro);
		return filtro;
	}

	edita(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(this.getComponente(), {
			width: '800px',
			data: {
				item: edicao,
				origem: this.produto
			}
		});
	}
}
