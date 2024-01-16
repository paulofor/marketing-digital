import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DalleSolicitacaoImagem, DalleSolicitacaoImagemApi } from '../shared/sdk';
import { DalleSolicitacaoImagemPorProdutoListBaseComponent } from './dalle-solicitacao-imagem-por-produto-list-base.component';
import { DalleSolicitacaoImagemEditComponent } from '../dalle-solicitacao-imagem-edit/dalle-solicitacao-imagem-edit.component';

@Component({
	selector: 'app-dalle-solicitacao-imagem-por-produto-list',
  	templateUrl: './dalle-solicitacao-imagem-por-produto-list.component.html',
  	styleUrls: ['./dalle-solicitacao-imagem-por-produto-list.component.css']
})
export class DalleSolicitacaoImagemPorProdutoListComponent extends DalleSolicitacaoImagemPorProdutoListBaseComponent {

	constructor(protected srv: DalleSolicitacaoImagemApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}


	carregaTela() {
		this.router.params.subscribe((params) => {
            this.idPrincipal = params['id'];
			let filtro = {'where' : {'hotmartId' : this.idPrincipal }}
            this.srv.find(filtro)
              .subscribe((result: DalleSolicitacaoImagem[]) => {
                console.log('Principal:' , result);
                this.listaBase = result;
                this.posCarregaLista();
              })
          })
    }

	edita(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(DalleSolicitacaoImagemEditComponent, {
			width: '800px',
			data: {
				item: edicao,
				origem : this.idPrincipal
			}
		});
	}
}
