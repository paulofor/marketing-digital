import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ImplementacaoItemEstruturaApi, ItemEstruturaPaginaVendaApi } from '../shared/sdk';
import { ItemEstruturaPaginaVendaDetalheBaseComponent } from './item-estrutura-pagina-venda-detalhe-base.component';
import { ImplementacaoItemEstruturaEditComponent } from '../implementacao-item-estrutura-edit/implementacao-item-estrutura-edit.component';

@Component({
	selector: 'app-item-estrutura-pagina-venda-detalhe',
  	templateUrl: './item-estrutura-pagina-venda-detalhe.component.html',
  	styleUrls: ['./item-estrutura-pagina-venda-detalhe.component.css']
})
export class ItemEstruturaPaginaVendaDetalheComponent extends ItemEstruturaPaginaVendaDetalheBaseComponent {

	constructor(protected srv: ItemEstruturaPaginaVendaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	editaImplementacao(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(ImplementacaoItemEstruturaEditComponent, {
			width: '800px',
			data: {
				item: edicao,
				origem: this.principal
			}
		});
	}

	getFiltro() {
		return {
			'include' : 'implementacaoItemEstruturas'
		}
	}
}
