import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ModeloPaginaVendaApi } from '../shared/sdk';
import { ModeloPaginaVendaDetalheBaseComponent } from './modelo-pagina-venda-detalhe-base.component';
import { PosicaoElementoPaginaVendaEditRelComponent } from '../posicao-elemento-pagina-venda-edit-rel/posicao-elemento-pagina-venda-edit-rel.component';
import { PosicaoElementoPaginaVendaEditComponent } from '../posicao-elemento-pagina-venda-edit/posicao-elemento-pagina-venda-edit.component';
import { ModeloPaginaVendaFonteEditComponent } from '../modelo-pagina-venda-fonte-edit/modelo-pagina-venda-fonte-edit.component';

@Component({
	selector: 'app-modelo-pagina-venda-detalhe',
  	templateUrl: './modelo-pagina-venda-detalhe.component.html',
  	styleUrls: ['./modelo-pagina-venda-detalhe.component.css']
})
export class ModeloPaginaVendaDetalheComponent extends ModeloPaginaVendaDetalheBaseComponent {

	constructor(protected srv: ModeloPaginaVendaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}


	getFiltro() {
		return {
			'include' : {'relation' : 'posicaoElementoPaginaVendas' , 'scope' : {
				'include' : 'elementoModeloPaginaVenda'
			}}
		}
	}

	alteraFonte() {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		  });
		  this.dialog.open(ModeloPaginaVendaFonteEditComponent, {
			width: '800px',
			data: {
			  item: this.principal
			}
		  });
		
	}

	alteraPosicao(rel) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		  });
		  this.dialog.open(PosicaoElementoPaginaVendaEditComponent, {
			width: '800px',
			data: {
			  item: rel
			}
		  });
	
	}

	alteraElementos() {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		  });
		  this.dialog.open(PosicaoElementoPaginaVendaEditRelComponent, {
			width: '800px',
			data: {
			  origem: this.principal
			}
		  });
	}

}
