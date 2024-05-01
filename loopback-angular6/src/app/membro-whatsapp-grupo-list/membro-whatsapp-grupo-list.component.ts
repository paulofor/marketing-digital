import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { MembroWhatsappGrupoApi } from '../shared/sdk';
import { MembroWhatsappGrupoListBaseComponent } from './membro-whatsapp-grupo-list-base.component';

@Component({
	selector: 'app-membro-whatsapp-grupo-list',
  	templateUrl: './membro-whatsapp-grupo-list.component.html',
  	styleUrls: ['./membro-whatsapp-grupo-list.component.css']
})
export class MembroWhatsappGrupoListComponent extends MembroWhatsappGrupoListBaseComponent {

	constructor(protected srv: MembroWhatsappGrupoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
