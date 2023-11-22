import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { ProdutoAfiliadoTrabalhoBaseComponent } from './produto-afiliado-trabalho-base.component';

@Component({
	selector: 'app-produto-afiliado-trabalho',
  	templateUrl: './produto-afiliado-trabalho.component.html',
  	styleUrls: ['./produto-afiliado-trabalho.component.css']
})
export class ProdutoAfiliadoTrabalhoComponent extends ProdutoAfiliadoTrabalhoBaseComponent {

	constructor(protected srv: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	reset() {
		this.srv.ResetTrabalho()
			.subscribe((result) => {
				this.carregaTela();
			})
	}

	desligaPixel(item) {
		this.srv.DesligaPixelVenda(item.hotmartId)
			.subscribe((result) => {
				this.carregaTela();
			})
	}

	getFiltro() {
		return {
			'counts' : ['campanhaAdsTestes','anuncioAds'],
			'where' : {'trabalho' : '1'},
			'include' : [ 
				{'relation' : 'visitaProdutoHotmarts' , 'scope' : {'where' : {'maisRecente' : 1}}} ,
				{'relation' : 'ideiaPalavraChaves' , 'scope' : {'where' : {'maisRecente' : 1}}}, 
				{'relation' : 'contaGoogle'},
				{'relation' : 'pixelGoogle' , 'scope' : {'include' : 'contaGoogle'}}
			]
			
		}
	}
}
