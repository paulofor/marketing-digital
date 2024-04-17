import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CriativoAnuncio, CriativoAnuncioApi, MetaAdsAnuncio, MetaAdsAnuncioApi, PaginaVendaAberta, PaginaVendaAbertaApi } from '../shared/sdk';
import { MetaAdsAnuncioEditBaseComponent } from './meta-ads-anuncio-edit-base.component';

@Component({
	selector: 'app-meta-ads-anuncio-edit',
  	templateUrl: './meta-ads-anuncio-edit.component.html',
  	styleUrls: ['./meta-ads-anuncio-edit.component.css']
})
export class MetaAdsAnuncioEditComponent extends MetaAdsAnuncioEditBaseComponent {

	listaCriativo: CriativoAnuncio[];
	listaPaginaVenda: PaginaVendaAberta[];


	constructor(protected dialogRef: MatDialogRef<any>, private srvCriativo:CriativoAnuncioApi, private srvPaginaVenda:PaginaVendaAbertaApi
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: MetaAdsAnuncioApi
		  ) {
	   super(dialogRef,data,servico);
	}

	montaCombos(): void {
		let filtro = {'where' : {'produtoProprioId' : this.origem.metaAdsCampanha.produtoProprioId}}
		console.log('filtro combo' , filtro);
		this.srvCriativo.find(filtro) 
			.subscribe((result:CriativoAnuncio[]) => {
				this.listaCriativo = result;
			})
		this.srvPaginaVenda.find(filtro)
			.subscribe((result:PaginaVendaAberta[]) => {
				this.listaPaginaVenda = result;
			})
	}

	criaItem(): MetaAdsAnuncio {
		let novo = new MetaAdsAnuncio();
		novo.metaAdsConjuntoAnuncioId = this.origem.id;
		novo.produtoProprioId = this.origem.metaAdsCampanha.produtoProprioId;
		return novo;
	}

	preSubmit(): void {
		delete this.item['criativoAnuncio'];
		delete this.item['paginaVendaAberta'];
	}
}
