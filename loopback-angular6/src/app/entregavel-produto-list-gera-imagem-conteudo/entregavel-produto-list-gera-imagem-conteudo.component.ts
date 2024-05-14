import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { EntregavelProduto, EntregavelProdutoApi } from '../shared/sdk';
import { EntregavelProdutoListGeraImagemConteudoBaseComponent } from './entregavel-produto-list-gera-imagem-conteudo-base.component';
import { EntregavelProdutoEditComponent } from '../entregavel-produto-edit/entregavel-produto-edit.component';

@Component({
	selector: 'app-entregavel-produto-list-gera-imagem-conteudo',
  	templateUrl: './entregavel-produto-list-gera-imagem-conteudo.component.html',
  	styleUrls: ['./entregavel-produto-list-gera-imagem-conteudo.component.css']
})
export class EntregavelProdutoListGeraImagemConteudoComponent extends EntregavelProdutoListGeraImagemConteudoBaseComponent {

	constructor(protected srv: EntregavelProdutoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	carregaTela() {
        this.srv.ListaParaGerarImagemConteudo()
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
