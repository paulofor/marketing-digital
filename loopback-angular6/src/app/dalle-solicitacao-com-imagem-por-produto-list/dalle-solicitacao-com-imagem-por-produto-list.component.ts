import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DalleSolicitacaoImagem, DalleSolicitacaoImagemApi, ImagemPaginaVenda, ImagemPaginaVendaApi, ProdutoAfiliadoHotmart, ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { DalleSolicitacaoComImagemPorProdutoListBaseComponent } from './dalle-solicitacao-com-imagem-por-produto-list-base.component';

@Component({
	selector: 'app-dalle-solicitacao-com-imagem-por-produto-list',
  	templateUrl: './dalle-solicitacao-com-imagem-por-produto-list.component.html',
  	styleUrls: ['./dalle-solicitacao-com-imagem-por-produto-list.component.css']
})
export class DalleSolicitacaoComImagemPorProdutoListComponent extends DalleSolicitacaoComImagemPorProdutoListBaseComponent {

	produto:ProdutoAfiliadoHotmart;

	constructor(protected srv: DalleSolicitacaoImagemApi, private srvImagem:ImagemPaginaVendaApi, private srvProduto:ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	carregaTela() {
		this.router.params.subscribe((params) => {
            this.idPrincipal = params['id'];
			let filtro = {'include': 'imagemPaginaVendas' , 'where' : {'hotmartId' : this.idPrincipal }}
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

	marcarDisponivel(imagem:ImagemPaginaVenda) {
		console.log('disponivel: ' , imagem);
		this.srvImagem.AlteraDisponivel(imagem.id)
			.subscribe((result) => {
				this.carregaTela()
			})
	}
}
