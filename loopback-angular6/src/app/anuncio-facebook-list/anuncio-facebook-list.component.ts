import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AnuncioFacebookApi, ProdutoProprio } from '../shared/sdk';
import { AnuncioFacebookListBaseComponent } from './anuncio-facebook-list-base.component';
import { AnuncioFacebookEditComponent } from '../anuncio-facebook-edit/anuncio-facebook-edit.component';

@Component({
	selector: 'app-anuncio-facebook-list',
  	templateUrl: './anuncio-facebook-list.component.html',
  	styleUrls: ['./anuncio-facebook-list.component.css']
})
export class AnuncioFacebookListComponent extends AnuncioFacebookListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: AnuncioFacebookApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}




	getFiltro() {
		let filtro =  {
			'where' : {'produtoProprioId' : this.produto.id},
		};
		console.log('filtro-produto:' , filtro);
		return filtro;
	}

	edita(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(AnuncioFacebookEditComponent, {
			width: '800px',
			data: {
				item: edicao,
				origem: this.produto
			}
		});
	}

}
