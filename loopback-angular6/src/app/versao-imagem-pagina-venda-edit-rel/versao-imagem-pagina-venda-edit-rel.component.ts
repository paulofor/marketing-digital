import { Component, Inject, OnInit } from '@angular/core';
import { VersaoImagemPaginaVendaEditRelBaseComponent } from './versao-imagem-pagina-venda-edit-rel-base.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VersaoPaginaVendaApi, DalleSolicitacaoImagemApi, VersaoImagemPaginaVendaApi } from '../shared/sdk';

@Component({
	selector: 'app-versao-imagem-pagina-venda-edit-rel',
  	templateUrl: './versao-imagem-pagina-venda-edit-rel.component.html',
  	styleUrls: ['./versao-imagem-pagina-venda-edit-rel.component.css']
})
export class VersaoImagemPaginaVendaEditRelComponent extends VersaoImagemPaginaVendaEditRelBaseComponent {


	constructor(protected dialogRef: MatDialogRef<any>, protected srv1:VersaoPaginaVendaApi, protected srv2:DalleSolicitacaoImagemApi, 
		@Inject(MAT_DIALOG_DATA) protected data: any, protected srvRel : VersaoImagemPaginaVendaApi) { 
			super(dialogRef,srv1,srv2,data,srvRel);
		}

}
