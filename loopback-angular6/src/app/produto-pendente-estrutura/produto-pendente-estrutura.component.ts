import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { ProdutoPendenteEstruturaBaseComponent } from './produto-pendente-estrutura-base.component';

@Component({
	selector: 'app-produto-pendente-estrutura',
  	templateUrl: './produto-pendente-estrutura.component.html',
  	styleUrls: ['./produto-pendente-estrutura.component.css']
})
export class ProdutoPendenteEstruturaComponent extends ProdutoPendenteEstruturaBaseComponent {

	constructor(protected srv: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
