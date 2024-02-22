import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProdutoProprioApi } from '../shared/sdk';
import { ProdutoProprioDetalheBaseComponent } from './produto-proprio-detalhe-base.component';
import { TabService } from '../tab.service';


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
			'include' : 'produtoProprioVersaos'
		}
	}
	selectTab(tabNumber: number, objectId: number) {
		this.tabService.selectTab(tabNumber);
		this.tabService.setCurrentObjectId(objectId); // Define o ID do objeto atual
	  }
}
