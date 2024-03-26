import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { EstruturaPaginaVendaAbertaApi } from '../shared/sdk';
import { EstruturaPaginaVendaAbertaDetalheBaseComponent } from './estrutura-pagina-venda-aberta-detalhe-base.component';
import { ItemEstruturaPaginaVendaEditComponent } from '../item-estrutura-pagina-venda-edit/item-estrutura-pagina-venda-edit.component';
import { EstruturaPaginaVendaAbertaEditComponent } from '../estrutura-pagina-venda-aberta-edit/estrutura-pagina-venda-aberta-edit.component';
import { PaginaImplementacaoEditRelComponent } from '../pagina-implementacao-edit-rel/pagina-implementacao-edit-rel.component';

@Component({
	selector: 'app-estrutura-pagina-venda-aberta-detalhe',
  	templateUrl: './estrutura-pagina-venda-aberta-detalhe.component.html',
  	styleUrls: ['./estrutura-pagina-venda-aberta-detalhe.component.css']
})
export class EstruturaPaginaVendaAbertaDetalheComponent extends EstruturaPaginaVendaAbertaDetalheBaseComponent {

	constructor(protected srv: EstruturaPaginaVendaAbertaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro(): {} {
		return {
			'include' : {'relation': 'itemEstruturaPaginaVendas' , 'scope' : {'order' : 'ordenacao'} }
		}
	}

	editaItem(item) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(ItemEstruturaPaginaVendaEditComponent, {
			width: '800px',
			data: {
				item: item,
				origem: this.principal
			}
		});
	}

	editaEstrutura() {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(EstruturaPaginaVendaAbertaEditComponent, {
			width: '800px',
			data: {
				item: this.principal
			}
		});
	}

	
}
