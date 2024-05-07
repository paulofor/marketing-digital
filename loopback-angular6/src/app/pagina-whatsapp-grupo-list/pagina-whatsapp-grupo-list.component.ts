import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PaginaWhatsappGrupoApi, ProdutoProprio } from '../shared/sdk';
import { PaginaWhatsappGrupoListBaseComponent } from './pagina-whatsapp-grupo-list-base.component';

@Component({
	selector: 'app-pagina-whatsapp-grupo-list',
  	templateUrl: './pagina-whatsapp-grupo-list.component.html',
  	styleUrls: ['./pagina-whatsapp-grupo-list.component.css']
})
export class PaginaWhatsappGrupoListComponent extends PaginaWhatsappGrupoListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: PaginaWhatsappGrupoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}


	getFiltro() {
		let filtro =  {
			'where' : {'produtoProprioId' : this.produto.id},
			'include' : 'whatsappGrupo'
		};
		console.log('filtro-pagina:' , filtro);
		return filtro;
	}

	edita(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(this.getComponente(), {
			width: '800px',
			data: {
				item: edicao,
				origem: this.produto
			}
		});
	}

}
