import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ModeloPaginaVenda, ModeloPaginaVendaApi, VersaoPaginaVenda, VersaoPaginaVendaApi } from '../shared/sdk';
import { VersaoPaginaVendaEditBaseComponent } from './versao-pagina-venda-edit-base.component';

@Component({
	selector: 'app-versao-pagina-venda-edit',
  	templateUrl: './versao-pagina-venda-edit.component.html',
  	styleUrls: ['./versao-pagina-venda-edit.component.css']
})
export class VersaoPaginaVendaEditComponent extends VersaoPaginaVendaEditBaseComponent {

	listaModeloPaginaVenda: ModeloPaginaVenda[];

	constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: VersaoPaginaVendaApi,
		private srvModelo: ModeloPaginaVendaApi
		  ) {
	   super(dialogRef,data,servico);
	}

	montaCombos() {
		this.srvModelo.find()
			.subscribe((result:ModeloPaginaVenda[]) => {
				this.listaModeloPaginaVenda = result;
			})
	}

	criaItem() {
		let saida: VersaoPaginaVenda = new VersaoPaginaVenda();
		saida.hotmartId = this.origem.hotmartId;
		return saida;
 	}

}
