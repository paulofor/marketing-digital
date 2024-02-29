import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AnuncioConceitoAdsRedeDisplayApi, ProdutoAfiliadoHotmart } from '../shared/sdk';
import { AnuncioConceitoAdsRedeDisplayEditBaseComponent } from './anuncio-conceito-ads-rede-display-edit-base.component';
import { AnuncioConceitoAdsRedeDisplay } from '../shared/sdk/models/AnuncioConceitoAdsRedeDisplay';

@Component({
	selector: 'app-anuncio-conceito-ads-rede-display-edit',
  	templateUrl: './anuncio-conceito-ads-rede-display-edit.component.html',
  	styleUrls: ['./anuncio-conceito-ads-rede-display-edit.component.css']
})
export class AnuncioConceitoAdsRedeDisplayEditComponent extends AnuncioConceitoAdsRedeDisplayEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: AnuncioConceitoAdsRedeDisplayApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem() {
		let saida = new AnuncioConceitoAdsRedeDisplay();
		if (this.origem instanceof ProdutoAfiliadoHotmart) {
			saida.hotmartId = this.origem.hotmartId;
		} else {
			saida.produtoProprioId = this.origem.id;
		}
		return saida;
	}

}
