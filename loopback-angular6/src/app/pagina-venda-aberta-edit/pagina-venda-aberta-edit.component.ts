import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CheckoutProdutoProprioApi, EstruturaPaginaVendaAbertaApi, PaginaVendaAbertaApi } from '../shared/sdk';
import { PaginaVendaAbertaEditBaseComponent } from './pagina-venda-aberta-edit-base.component';
import { PaginaVendaAberta } from '../shared/sdk/models/PaginaVendaAberta';
import { CheckoutProdutoProprio } from '../shared/sdk/models/CheckoutProdutoProprio';
import { EstruturaPaginaVendaAberta } from '../shared/sdk/models/EstruturaPaginaVendaAberta';

@Component({
	selector: 'app-pagina-venda-aberta-edit',
  	templateUrl: './pagina-venda-aberta-edit.component.html',
  	styleUrls: ['./pagina-venda-aberta-edit.component.css']
})
export class PaginaVendaAbertaEditComponent extends PaginaVendaAbertaEditBaseComponent {

	private listaCheckout:CheckoutProdutoProprio[];
	private listaEstrutura:EstruturaPaginaVendaAberta[];

	constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PaginaVendaAbertaApi, private srvCheckout:CheckoutProdutoProprioApi,
		private srvEstrutura: EstruturaPaginaVendaAbertaApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem() {
		let saida = new PaginaVendaAberta();
		saida.produtoProprioId = this.origem.id;
		return saida;
	}

	montaCombos(): void {
		let filtro = {'where' : {'produtoProprioId' : this.origem.id }}
		this.srvCheckout.find(filtro)
			.subscribe((result:CheckoutProdutoProprio[]) => {
				this.listaCheckout = result;
			});
		this.srvEstrutura.find() 
			.subscribe((result:EstruturaPaginaVendaAberta[]) => {
				this.listaEstrutura = result;
			})
	}

	preSubmit(): void {
		delete this.item['checkoutProdutoProprio'];
		delete this.item['estruturaPaginaVendaAberta'];
	}
}
