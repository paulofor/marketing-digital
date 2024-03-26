import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DalleSolicitacaoImagemApi, ImagemPaginaVenda, ImagemPaginaVendaApi, ProdutoProprio } from '../shared/sdk';
import { DalleSolicitacaoComImagemPorProprioListBaseComponent } from './dalle-solicitacao-com-imagem-por-proprio-list-base.component';
import { ExibeTextoSemPreComponent } from '../exibe-texto-sem-pre/exibe-texto-sem-pre.component';

@Component({
	selector: 'app-dalle-solicitacao-com-imagem-por-proprio-list',
  	templateUrl: './dalle-solicitacao-com-imagem-por-proprio-list.component.html',
  	styleUrls: ['./dalle-solicitacao-com-imagem-por-proprio-list.component.css']
})
export class DalleSolicitacaoComImagemPorProprioListComponent extends DalleSolicitacaoComImagemPorProprioListBaseComponent {

	@Input() produto: ProdutoProprio | null;

	constructor(protected srv: DalleSolicitacaoImagemApi, protected router: ActivatedRoute, protected dialog: MatDialog,
		private srvImagem:ImagemPaginaVendaApi) { 
		super(srv,router,dialog);
	}
	

	getFiltro() {
		console.log('produto:' , this.produto);
		return {
			'where' : {'produtoProprioId' : this.produto.id},
			'include' : 'imagemPaginaVendas'
		}
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

	marcarDisponivel(imagem:ImagemPaginaVenda) {
		console.log('disponivel: ' , imagem);
		this.srvImagem.AlteraDisponivel(imagem.id)
			.subscribe((result) => {
				this.carregaTela()
			})
	}

	link(imagem:ImagemPaginaVenda) {
		this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(ExibeTextoSemPreComponent, {
            width: '800px',
            data: {
                texto: imagem.urlJpeg
            }
        });

	}

	detalhar(imagem:ImagemPaginaVenda) {
		this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(ExibeTextoSemPreComponent, {
            width: '800px',
            data: {
                texto: imagem.promptRevisado
            }
        });

	}
}
