import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProdutoProprioApi } from '../shared/sdk';
import { ProdutoProprioDetalheBaseComponent } from './produto-proprio-detalhe-base.component';
import { TabService } from '../tab.service';
import { ProdutoProprioEditComponent } from '../produto-proprio-edit/produto-proprio-edit.component';


@Component({
	selector: 'app-produto-proprio-detalhe',
  	templateUrl: './produto-proprio-detalhe.component.html',
  	styleUrls: ['./produto-proprio-detalhe.component.css']
})
export class ProdutoProprioDetalheComponent extends ProdutoProprioDetalheBaseComponent {

	constructor(protected srv: ProdutoProprioApi, protected router: ActivatedRoute, protected dialog: MatDialog,public tabService: TabService) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {
			'include' : ['produtoProprioVersaos','contaGoogle']
		}
	}
	selectTab(tabNumber: number, objectId: number) {
		this.tabService.selectTab(tabNumber);
		this.tabService.setCurrentObjectId(objectId); // Define o ID do objeto atual
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
		return ProdutoProprioEditComponent
	}
}
