import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { WhatsappGrupoApi } from '../shared/sdk';
import { WhatsappGrupoDetalheBaseComponent } from './whatsapp-grupo-detalhe-base.component';

@Component({
	selector: 'app-whatsapp-grupo-detalhe',
  	templateUrl: './whatsapp-grupo-detalhe.component.html',
  	styleUrls: ['./whatsapp-grupo-detalhe.component.css']
})
export class WhatsappGrupoDetalheComponent extends WhatsappGrupoDetalheBaseComponent {

	constructor(protected srv: WhatsappGrupoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
