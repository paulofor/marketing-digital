import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ElementoModeloPaginaVenda, ElementoModeloPaginaVendaApi, VersaoPaginaVendaApi } from '../shared/sdk';
import { VersaoPaginaVendaDetalheBaseComponent } from './versao-pagina-venda-detalhe-base.component';
import { ConteudoElementoEditComponent } from '../conteudo-elemento-edit/conteudo-elemento-edit.component';
import { VersaoImagemPaginaVendaEditRelComponent } from '../versao-imagem-pagina-venda-edit-rel/versao-imagem-pagina-venda-edit-rel.component';
import { ArquivoPaginaVendaEditRelComponent } from '../arquivo-pagina-venda-edit-rel/arquivo-pagina-venda-edit-rel.component';

@Component({
	selector: 'app-versao-pagina-venda-detalhe',
  	templateUrl: './versao-pagina-venda-detalhe.component.html',
  	styleUrls: ['./versao-pagina-venda-detalhe.component.css']
})
export class VersaoPaginaVendaDetalheComponent extends VersaoPaginaVendaDetalheBaseComponent {


	listaElementoConteudo: ElementoModeloPaginaVenda[];


	constructor(protected srv: VersaoPaginaVendaApi, protected router: ActivatedRoute, protected dialog: MatDialog, 
		private srvElemento: ElementoModeloPaginaVendaApi) { 
		super(srv,router,dialog);
	}

	edita(edicao?) {
		console.log('Item Edicao: ' , edicao)
        this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(ConteudoElementoEditComponent, {
            width: '800px',
            data: {
                item: edicao
            }
        });
    }

	atualizaImagem() {
        this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(ArquivoPaginaVendaEditRelComponent, {
            width: '800px',
            data: {
                origem: this.principal
            }
        });
    }

	formataComQuebra(texto: string): string {
		return texto.replace(/\n/g, '<br>');
	  }

	getFiltro() {
		return {
			'include' : [
				'produtoAfiliadoHotmart',
				{'relation' : 'arquivoPaginaVendas' , 'scope' : {
					'include' : 'imagemPaginaVenda'}}
			]
		}
	}

	posCarregaTela(): void {
		this.srvElemento.ListaComConteudoPorVersaoPagina(this.principal.id)
			.subscribe((result:ElementoModeloPaginaVenda[]) => {
				console.log('Result-List:' , result);
				this.listaElementoConteudo = result;
			})
	}

}
