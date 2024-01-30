import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PaginaVendaPropria, PaginaVendaPropriaApi, ProdutoAfiliadoHotmart, ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { PaginaVendaPropriaPorProdutoListBaseComponent } from './pagina-venda-propria-por-produto-list-base.component';

@Component({
	selector: 'app-pagina-venda-propria-por-produto-list',
  	templateUrl: './pagina-venda-propria-por-produto-list.component.html',
  	styleUrls: ['./pagina-venda-propria-por-produto-list.component.css']
})
export class PaginaVendaPropriaPorProdutoListComponent extends PaginaVendaPropriaPorProdutoListBaseComponent {


	produto: ProdutoAfiliadoHotmart;
	

	constructor(protected srv: PaginaVendaPropriaApi, protected router: ActivatedRoute, protected dialog: MatDialog,
		private srvProduto:ProdutoAfiliadoHotmartApi) { 
		super(srv,router,dialog);
	}


    carregaTela() {
        this.router.params.subscribe((params) => {
            let id = params['id'];
            this.srvProduto.findById(id)
              .subscribe((result: ProdutoAfiliadoHotmart) => {
				console.log('Produto:' , result);
                this.produto = result;
            })
			let filtro = {'where' : {'hotmartId' : id}};
			this.srv.find(filtro)
				.subscribe((result:PaginaVendaPropria[]) => {
					console.log('ListaPaginaVenda:' , result);
					this.listaBase = result;
				})
          })
    }

}
