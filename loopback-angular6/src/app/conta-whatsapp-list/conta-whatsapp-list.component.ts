import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ContaWhatsappApi } from '../shared/sdk';
import { ContaWhatsappListBaseComponent } from './conta-whatsapp-list-base.component';

@Component({
	selector: 'app-conta-whatsapp-list',
  	templateUrl: './conta-whatsapp-list.component.html',
  	styleUrls: ['./conta-whatsapp-list.component.css']
})
export class ContaWhatsappListComponent extends ContaWhatsappListBaseComponent {

	constructor(protected srv: ContaWhatsappApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
