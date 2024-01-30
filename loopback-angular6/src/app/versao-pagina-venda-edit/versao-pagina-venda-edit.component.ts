import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ModeloPaginaVenda, ModeloPaginaVendaApi, ProdutoAfiliadoHotlink, ProdutoAfiliadoHotlinkApi, VersaoPaginaVenda, VersaoPaginaVendaApi } from '../shared/sdk';
import { VersaoPaginaVendaEditBaseComponent } from './versao-pagina-venda-edit-base.component';

@Component({
	selector: 'app-versao-pagina-venda-edit',
  	templateUrl: './versao-pagina-venda-edit.component.html',
  	styleUrls: ['./versao-pagina-venda-edit.component.css']
})
export class VersaoPaginaVendaEditComponent extends VersaoPaginaVendaEditBaseComponent {

	listaModeloPaginaVenda: ModeloPaginaVenda[];
	listaHotlink:ProdutoAfiliadoHotlink[];

	constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: VersaoPaginaVendaApi,
		private srvModelo: ModeloPaginaVendaApi, private srvLink:ProdutoAfiliadoHotlinkApi
		  ) {
	   super(dialogRef,data,servico);
	}

	montaCombos() {
		this.srvModelo.find()
			.subscribe((result:ModeloPaginaVenda[]) => {
				this.listaModeloPaginaVenda = result;
			});
		let filtro = {'where' : {'hotmartId' : this.item.hotmartId}}
		this.srvLink.find(filtro)
			.subscribe((result:ProdutoAfiliadoHotlink[]) => {
				this.listaHotlink = result;
			})
	}

	criaItem() {
		let saida: VersaoPaginaVenda = new VersaoPaginaVenda();
		saida.hotmartId = this.origem.hotmartId;
		return saida;
 	}
	 preSubmit() {
		delete this.item['arquivoPaginaVendas'];
		delete this.item['produtoAfiliadoHotlink'];
		delete this.item['produtoAfiliadoHotmart'];
	  }


}
