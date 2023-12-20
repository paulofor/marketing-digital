import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { AnuncioAdsDisplayPorProdutoListBaseComponent } from './anuncio-ads-display-por-produto-list-base.component';

@Component({
	selector: 'app-anuncio-ads-display-por-produto-list',
  	templateUrl: './anuncio-ads-display-por-produto-list.component.html',
  	styleUrls: ['./anuncio-ads-display-por-produto-list.component.css']
})
export class AnuncioAdsDisplayPorProdutoListComponent extends AnuncioAdsDisplayPorProdutoListBaseComponent {

	constructor(protected srv: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
