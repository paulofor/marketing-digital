import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ElementoModeloPaginaVendaApi, ModeloPaginaVendaApi, PosicaoElementoPaginaVendaApi } from '../shared/sdk';
import { PosicaoElementoPaginaVendaEditRelBaseComponent } from './posicao-elemento-pagina-venda-edit-rel-base.component';

@Component({
	selector: 'app-posicao-elemento-pagina-venda-edit-rel',
  	templateUrl: './posicao-elemento-pagina-venda-edit-rel.component.html',
  	styleUrls: ['./posicao-elemento-pagina-venda-edit-rel.component.css']
})
export class PosicaoElementoPaginaVendaEditRelComponent extends PosicaoElementoPaginaVendaEditRelBaseComponent {

	
	constructor(protected dialogRef: MatDialogRef<any>, protected srv1:ModeloPaginaVendaApi, protected srv2:ElementoModeloPaginaVendaApi, 
		@Inject(MAT_DIALOG_DATA) protected data: any, protected srvRel:PosicaoElementoPaginaVendaApi ) { 
			super(dialogRef, srv1,srv2,data,srvRel);
		}
}
