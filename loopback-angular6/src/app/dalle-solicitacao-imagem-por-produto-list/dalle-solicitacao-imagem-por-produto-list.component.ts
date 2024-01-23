import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DalleSolicitacaoImagem, DalleSolicitacaoImagemApi, ProdutoAfiliadoHotlink, ProdutoAfiliadoHotmart, ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { DalleSolicitacaoImagemPorProdutoListBaseComponent } from './dalle-solicitacao-imagem-por-produto-list-base.component';
import { DalleSolicitacaoImagemEditComponent } from '../dalle-solicitacao-imagem-edit/dalle-solicitacao-imagem-edit.component';

@Component({
	selector: 'app-dalle-solicitacao-imagem-por-produto-list',
  	templateUrl: './dalle-solicitacao-imagem-por-produto-list.component.html',
  	styleUrls: ['./dalle-solicitacao-imagem-por-produto-list.component.css']
})
export class DalleSolicitacaoImagemPorProdutoListComponent extends DalleSolicitacaoImagemPorProdutoListBaseComponent {

	produto:ProdutoAfiliadoHotmart;

	constructor(protected srv: DalleSolicitacaoImagemApi, private srvProduto: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	pronto(item) {
		this.srv.InverteEnviar(item.id)
			.subscribe((result) => {
				this.carregaTela();
			})
	}


	carregaTela() {
		this.router.params.subscribe((params) => {
            this.idPrincipal = params['id'];
			let filtro = {'order' : 'id desc' , 'where' : {'hotmartId' : this.idPrincipal }}
            this.srv.find(filtro)
              .subscribe((result: DalleSolicitacaoImagem[]) => {
                console.log('Principal:' , result);
                this.listaBase = result;
                this.posCarregaLista();
              })
			this.srvProduto.findById(this.idPrincipal)
			  .subscribe((result:ProdutoAfiliadoHotmart) => {
				this.produto = result;
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
