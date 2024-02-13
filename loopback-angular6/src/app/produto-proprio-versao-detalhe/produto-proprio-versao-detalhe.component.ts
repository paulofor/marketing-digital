import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProdutoProprioVersaoApi } from '../shared/sdk';
import { ProdutoProprioVersaoDetalheBaseComponent } from './produto-proprio-versao-detalhe-base.component';

@Component({
	selector: 'app-produto-proprio-versao-detalhe',
  	templateUrl: './produto-proprio-versao-detalhe.component.html',
  	styleUrls: ['./produto-proprio-versao-detalhe.component.css']
})
export class ProdutoProprioVersaoDetalheComponent extends ProdutoProprioVersaoDetalheBaseComponent {

	constructor(protected srv: ProdutoProprioVersaoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {
			'include' : [
				'produtoProprio',
				'produtoProprioItemNivel1s'
			]
		}
	}
}
