import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MetaAdsPixelVendaApi } from '../shared/sdk';
import { MetaAdsPixelVendaEditBaseComponent } from './meta-ads-pixel-venda-edit-base.component';
import { Meta } from '@angular/platform-browser';
import { MetaAdsPixelVenda } from '../shared/sdk/models/MetaAdsPixelVenda';

@Component({
	selector: 'app-meta-ads-pixel-venda-edit',
  	templateUrl: './meta-ads-pixel-venda-edit.component.html',
  	styleUrls: ['./meta-ads-pixel-venda-edit.component.css']
})
export class MetaAdsPixelVendaEditComponent extends MetaAdsPixelVendaEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: MetaAdsPixelVendaApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem() {
		let pixel:MetaAdsPixelVenda = new MetaAdsPixelVenda();
		pixel.produtoProprioId = this.origem.id;
		return pixel;
	}

}
