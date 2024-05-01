import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PaginaWhatsappExemploApi } from '../shared/sdk';
import { PaginaWhatsappExemploListBaseComponent } from './pagina-whatsapp-exemplo-list-base.component';

@Component({
	selector: 'app-pagina-whatsapp-exemplo-list',
  	templateUrl: './pagina-whatsapp-exemplo-list.component.html',
  	styleUrls: ['./pagina-whatsapp-exemplo-list.component.css']
})
export class PaginaWhatsappExemploListComponent extends PaginaWhatsappExemploListBaseComponent {

	constructor(protected srv: PaginaWhatsappExemploApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
