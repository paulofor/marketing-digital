import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { WhatsappGrupoApi } from '../shared/sdk';
import { WhatsappGrupoPorProdutoListBaseComponent } from './whatsapp-grupo-por-produto-list-base.component';

@Component({
	selector: 'app-whatsapp-grupo-por-produto-list',
  	templateUrl: './whatsapp-grupo-por-produto-list.component.html',
  	styleUrls: ['./whatsapp-grupo-por-produto-list.component.css']
})
export class WhatsappGrupoPorProdutoListComponent extends WhatsappGrupoPorProdutoListBaseComponent {

	constructor(protected srv: WhatsappGrupoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
