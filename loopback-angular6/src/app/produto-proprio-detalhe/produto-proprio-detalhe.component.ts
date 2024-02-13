import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProdutoProprioApi } from '../shared/sdk';
import { ProdutoProprioDetalheBaseComponent } from './produto-proprio-detalhe-base.component';

@Component({
	selector: 'app-produto-proprio-detalhe',
  	templateUrl: './produto-proprio-detalhe.component.html',
  	styleUrls: ['./produto-proprio-detalhe.component.css']
})
export class ProdutoProprioDetalheComponent extends ProdutoProprioDetalheBaseComponent {

	constructor(protected srv: ProdutoProprioApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {
			'include' : 'produtoProprioVersaos'
		}
	}

}
