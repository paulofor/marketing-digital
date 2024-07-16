import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { MetaAdsPublicoApi, ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { MetaAdsPublicoListBaseComponent } from './meta-ads-publico-list-base.component';
import { BaseItemIdComponent } from '../base-component/base-item-id-component';
import { FrameworkPublicoInteresseEditComponent } from '../framework-publico-interesse-edit/framework-publico-interesse-edit.component';
import { MetaAdsPublicoEditComponent } from '../meta-ads-publico-edit/meta-ads-publico-edit.component';

@Component({
	selector: 'app-meta-ads-publico-list',
  	templateUrl: './meta-ads-publico-list.component.html',
  	styleUrls: ['./meta-ads-publico-list.component.css']
})
export class MetaAdsPublicoListComponent extends BaseItemIdComponent {


	constructor(protected dialog: MatDialog, protected srv: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute) {
		super(dialog, srv, router);
	}


	getFiltro() {
		return {
		  'include' : 'metaAdsPublicos'
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
		return MetaAdsPublicoEditComponent;
	  }

}
