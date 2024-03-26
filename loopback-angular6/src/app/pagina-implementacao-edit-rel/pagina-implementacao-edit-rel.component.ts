import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImagemPaginaVendaApi, VersaoPaginaVendaApi, ArquivoPaginaVendaApi, ImplementacaoItemEstruturaApi, PaginaImplementacaoApi, PaginaVendaAbertaApi, ItemEstruturaPaginaVenda, PaginaVendaAberta } from '../shared/sdk';
import { PaginaImplementacaoEditRelBaseComponent } from './pagina-implementacao-edit-rel-base.component';

@Component({
	selector: 'app-pagina-implementacao-edit-rel',
  	templateUrl: './pagina-implementacao-edit-rel.component.html',
  	styleUrls: ['./pagina-implementacao-edit-rel.component.css']
})

export class PaginaImplementacaoEditRelComponent extends PaginaImplementacaoEditRelBaseComponent {

	paginaAberta: PaginaVendaAberta;
	item: ItemEstruturaPaginaVenda;
	idImplementacao: number;

	itemSelecionado: any;

	constructor(protected dialogRef: MatDialogRef<any>, protected srv1:PaginaVendaAbertaApi, protected srv2:ImplementacaoItemEstruturaApi, 
		@Inject(MAT_DIALOG_DATA) protected data: any, protected srvRel : PaginaImplementacaoApi) { 
			super(dialogRef,srv1,srv2,data,srvRel)
	 }
	 ngOnInit() {
		if (this.data.origem) {
			this.paginaAberta = this.data.origem;
		}
		if (this.data.item) {
			this.item = this.data.item;
		}
		this.carregaTela();
	}

	carregaTela() {
		this.srv2.PossiveisParaPaginaItem(this.paginaAberta.id, this.item.id)
			.subscribe((result:any[]) => {
				console.log('PaginaImplementacaoEditRelComponent:', result);
				this.listaBase = result;
			})
	}


	onChange(item: any) {
		console.log('Item selecionado:', item);
		//this.idImplementacao = item.id;
	}

	onSubmit() {
		this.srvRel.AtualizaComIds(this.paginaAberta.id,this.item.id, this.itemSelecionado.id)
			.subscribe((result) => {
				this.dialogRef.close('Pizza!');
			})
	}
}
