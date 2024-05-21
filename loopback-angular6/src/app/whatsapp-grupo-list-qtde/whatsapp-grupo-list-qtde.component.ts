import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { WhatsappGrupoApi } from '../shared/sdk';
import { WhatsappGrupoListQtdeBaseComponent } from './whatsapp-grupo-list-qtde-base.component';
import { WhatsappGrupoEditQtdeComponent } from '../whatsapp-grupo-edit-qtde/whatsapp-grupo-edit-qtde.component';

@Component({
	selector: 'app-whatsapp-grupo-list-qtde',
  	templateUrl: './whatsapp-grupo-list-qtde.component.html',
  	styleUrls: ['./whatsapp-grupo-list-qtde.component.css']
})
export class WhatsappGrupoListQtdeComponent extends WhatsappGrupoListQtdeBaseComponent {

	constructor(protected srv: WhatsappGrupoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getComponente() {
		return WhatsappGrupoEditQtdeComponent;
	}

	getFiltro(): {} {
		return {
			'include' : 'produtoProprio'
		}
	}

}
