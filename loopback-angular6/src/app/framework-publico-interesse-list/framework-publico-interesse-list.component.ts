import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { FrameworkPublicoInteresseApi, ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { FrameworkPublicoInteresseListBaseComponent } from './framework-publico-interesse-list-base.component';
import { BaseItemIdComponent } from '../base-component/base-item-id-component';
import { FrameworkPublicoInteresseEditComponent } from '../framework-publico-interesse-edit/framework-publico-interesse-edit.component';

@Component({
	selector: 'app-framework-publico-interesse-list',
  	templateUrl: './framework-publico-interesse-list.component.html',
  	styleUrls: ['./framework-publico-interesse-list.component.css']
})
export class FrameworkPublicoInteresseListComponent extends BaseItemIdComponent {



	constructor(protected dialog: MatDialog, protected srv: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute) {
		super(dialog, srv, router);
	}


	getFiltro() {
		return {
		  'include' : 'frameworkPublicoInteresses'
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
				origem: this.principal
			}
		});
	  }
	
	  getComponente() {
		return FrameworkPublicoInteresseEditComponent;
	  }
}
