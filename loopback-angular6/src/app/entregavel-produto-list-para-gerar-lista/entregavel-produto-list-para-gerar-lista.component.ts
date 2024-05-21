import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { EntregavelProduto, EntregavelProdutoApi } from '../shared/sdk';
import { EntregavelProdutoListParaGerarListaBaseComponent } from './entregavel-produto-list-para-gerar-lista-base.component';
import { EntregavelProdutoEditComponent } from '../entregavel-produto-edit/entregavel-produto-edit.component';

@Component({
	selector: 'app-entregavel-produto-list-para-gerar-lista',
  	templateUrl: './entregavel-produto-list-para-gerar-lista.component.html',
  	styleUrls: ['./entregavel-produto-list-para-gerar-lista.component.css']
})
export class EntregavelProdutoListParaGerarListaComponent extends EntregavelProdutoListParaGerarListaBaseComponent {

	constructor(protected srv: EntregavelProdutoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	carregaTela() {
        this.srv.ListaParaGerarLista()
	     .subscribe((result:EntregavelProduto[]) => {
            console.log('result: ' , result);
            this.listaBase = result;
            this.posCarregaLista();
        })
    }

	edita(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(EntregavelProdutoEditComponent, {
			width: '800px',
			data: {
				item: edicao
			}
		});
	}

}
