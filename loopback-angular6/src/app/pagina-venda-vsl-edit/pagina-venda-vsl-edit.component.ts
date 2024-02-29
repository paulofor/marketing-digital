import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ModeloPaginaVendaApi, ModeloPaginaVendaVsl, ModeloPaginaVendaVslApi, PaginaVendaVsl, PaginaVendaVslApi, VideoVsl, VideoVslApi } from '../shared/sdk';
import { PaginaVendaVslEditBaseComponent } from './pagina-venda-vsl-edit-base.component';

@Component({
	selector: 'app-pagina-venda-vsl-edit',
  	templateUrl: './pagina-venda-vsl-edit.component.html',
  	styleUrls: ['./pagina-venda-vsl-edit.component.css']
})
export class PaginaVendaVslEditComponent extends PaginaVendaVslEditBaseComponent {

	listaVideoVsl : VideoVsl[];
	listaModeloPaginaVenda: ModeloPaginaVendaVsl[];

	constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PaginaVendaVslApi,
		private srvVideo:VideoVslApi, private srvModelo:ModeloPaginaVendaVslApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem() {
		let saida = new PaginaVendaVsl();
		saida.produtoProprioId = this.origem.id;
		return saida;
	}

	montaCombos(): void {
		this.srvModelo.find()
			.subscribe((result:ModeloPaginaVendaVsl[]) => {
				console.log('modelos:' , result);
				this.listaModeloPaginaVenda = result;
			})
		let filtro = {'where' : {'produtoProprioId' : this.origem.id}}
		this.srvVideo.find(filtro)
			.subscribe((result:VideoVsl[]) => {
				this.listaVideoVsl = result;
			})

	}
}
