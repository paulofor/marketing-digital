import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PaginaVendaAbertaApi } from '../shared/sdk';
import { PaginaVendaAbertaDetalheBaseComponent } from './pagina-venda-aberta-detalhe-base.component';
import { PaginaImplementacaoEditRelComponent } from '../pagina-implementacao-edit-rel/pagina-implementacao-edit-rel.component';

@Component({
	selector: 'app-pagina-venda-aberta-detalhe',
  	templateUrl: './pagina-venda-aberta-detalhe.component.html',
  	styleUrls: ['./pagina-venda-aberta-detalhe.component.css']
})
export class PaginaVendaAbertaDetalheComponent extends PaginaVendaAbertaDetalheBaseComponent {

	alturaImagem: number;

	constructor(protected srv: PaginaVendaAbertaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	onImageLoad(event: any) {
		this.alturaImagem = event.target.height;
	}

	getFiltro(): {} {
		return {
			'include' : {'relation' : 'estruturaPaginaVendaAberta' , 'scope' : {
				'include' : {'relation' : 'itemEstruturaPaginaVendas' , 'scope' : {
					'order' : 'ordenacao' , 'include' : {'relation' : 'implementacaoItemEstruturas' , 'scope' : {
						'include' : {'relation' : 'paginaImplementacaos' , 'scope' : {
							'where' : {'paginaVendaAbertaId' : this.idPrincipal }
						}}
					}}
				}}
			}}
		}
	}

	editaRelacionamento(item) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(PaginaImplementacaoEditRelComponent, {
			width: '800px',
			data: {
				origem: this.principal,
				item: item
			}
		});
	}
}
