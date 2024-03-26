import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ItemEstruturaPaginaVenda, ItemEstruturaPaginaVendaApi } from '../shared/sdk';
import { ItemEstruturaPaginaVendaEditBaseComponent } from './item-estrutura-pagina-venda-edit-base.component';

@Component({
	selector: 'app-item-estrutura-pagina-venda-edit',
  	templateUrl: './item-estrutura-pagina-venda-edit.component.html',
  	styleUrls: ['./item-estrutura-pagina-venda-edit.component.css']
})
export class ItemEstruturaPaginaVendaEditComponent extends ItemEstruturaPaginaVendaEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ItemEstruturaPaginaVendaApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem(): ItemEstruturaPaginaVenda {
		let saida = new ItemEstruturaPaginaVenda();
		saida.estruturaPaginaVendaAbertaId = this.origem.id;
		return saida; 
	}

}
