import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PromptItem, PromptItemApi } from '../shared/sdk';
import { PromptItemListCriaItemConteudoBaseComponent } from './prompt-item-list-cria-item-conteudo-base.component';
import { EntregavelProdutoEditComponent } from '../entregavel-produto-edit/entregavel-produto-edit.component';
import { PromptItemEditComponent } from '../prompt-item-edit/prompt-item-edit.component';

@Component({
	selector: 'app-prompt-item-list-cria-item-conteudo',
  	templateUrl: './prompt-item-list-cria-item-conteudo.component.html',
  	styleUrls: ['./prompt-item-list-cria-item-conteudo.component.css']
})
export class PromptItemListCriaItemConteudoComponent extends PromptItemListCriaItemConteudoBaseComponent {

	constructor(protected srv: PromptItemApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}
	carregaTela() {
        this.srv.ListaParaCriacaoComConteudos()
	     .subscribe((result:PromptItem[]) => {
            console.log('result: ' , result);
            this.listaBase = result;
            this.posCarregaLista();
        })
    }

	edita(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(this.getComponente(), {
			width: '800px',
			data: {
				item: edicao
			}
		});
	}
	getComponente() : any {
		return PromptItemEditComponent;
	}
}
