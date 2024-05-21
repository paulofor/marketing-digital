import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CheckoutProdutoProprio, CheckoutProdutoProprioApi, WhatsappGrupo, WhatsappGrupoApi } from '../shared/sdk';
import { WhatsappGrupoEditBaseComponent } from './whatsapp-grupo-edit-base.component';

@Component({
	selector: 'app-whatsapp-grupo-edit',
  	templateUrl: './whatsapp-grupo-edit.component.html',
  	styleUrls: ['./whatsapp-grupo-edit.component.css']
})
export class WhatsappGrupoEditComponent extends WhatsappGrupoEditBaseComponent {

	listaCheckout: CheckoutProdutoProprio[];

	 constructor(protected dialogRef: MatDialogRef<any>, private srvCheckout:CheckoutProdutoProprioApi,
	    @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: WhatsappGrupoApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem(): WhatsappGrupo {
		let saida = new WhatsappGrupo();
		saida.produtoProprioId = this.origem.id;
		return saida;
	}

	montaCombos(): void {
		let filtro = {'where' : {'produtoProprioId' : this.origem.id}}
		this.srvCheckout.find(filtro)
			.subscribe((result:CheckoutProdutoProprio[]) => {
				this.listaCheckout = result;
			})
	}
}
