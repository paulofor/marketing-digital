import { Component, Inject, OnInit } from '@angular/core';
import { ArquivoPaginaVendaEditRelBaseComponent } from './arquivo-pagina-venda-edit-rel-base.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImagemPaginaVendaApi, VersaoPaginaVendaApi, ArquivoPaginaVendaApi } from '../shared/sdk';

@Component({
	selector: 'app-arquivo-pagina-venda-edit-rel',
	templateUrl: './arquivo-pagina-venda-edit-rel.component.html',
	styleUrls: ['./arquivo-pagina-venda-edit-rel.component.css']
})
export class ArquivoPaginaVendaEditRelComponent extends ArquivoPaginaVendaEditRelBaseComponent {

	constructor(protected dialogRef: MatDialogRef<any>, protected srv1: ImagemPaginaVendaApi, protected srv2: VersaoPaginaVendaApi,
		@Inject(MAT_DIALOG_DATA) protected data: any, protected srvRel: ArquivoPaginaVendaApi) {
		super(dialogRef, srv1, srv2, data, srvRel)
	}


	getFiltro() {
		return {
			'where' : {'and' : [{'disponivel' : 1},{'hotmartId' : this.principal.hotmartId }]},
			'include': {
				'relation': 'arquivoPaginaVendas',
				'scope': {	
					'where': { 'imagemPaginaVendaId': this.principal.id }
				}
			}
		}
	}
}
