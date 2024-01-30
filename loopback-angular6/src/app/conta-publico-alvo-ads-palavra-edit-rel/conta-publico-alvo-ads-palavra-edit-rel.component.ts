import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContaGoogleApi, ContaPublicoAlvoAdsPalavraApi, PublicoAlvoAdsPalavraApi } from '../shared/sdk';
import { ContaPublicoAlvoAdsPalavraEditRelBaseComponent } from './conta-publico-alvo-ads-palavra-edit-rel-base.component';

@Component({
	selector: 'app-conta-publico-alvo-ads-palavra-edit-rel',
  	templateUrl: './conta-publico-alvo-ads-palavra-edit-rel.component.html',
  	styleUrls: ['./conta-publico-alvo-ads-palavra-edit-rel.component.css']
})

export class ContaPublicoAlvoAdsPalavraEditRelComponent extends ContaPublicoAlvoAdsPalavraEditRelBaseComponent {
	constructor(protected dialogRef: MatDialogRef<any>, protected srv1:ContaGoogleApi, protected srv2:PublicoAlvoAdsPalavraApi, 
		@Inject(MAT_DIALOG_DATA) protected data: any, protected srvRel : ContaPublicoAlvoAdsPalavraApi) { 
			super(dialogRef,srv1,srv2,data,srvRel)
	 }



}
