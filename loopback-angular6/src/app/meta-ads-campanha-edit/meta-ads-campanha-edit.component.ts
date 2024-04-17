import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MetaAdsCampanha, MetaAdsCampanhaApi } from '../shared/sdk';
import { MetaAdsCampanhaEditBaseComponent } from './meta-ads-campanha-edit-base.component';

@Component({
	selector: 'app-meta-ads-campanha-edit',
  	templateUrl: './meta-ads-campanha-edit.component.html',
  	styleUrls: ['./meta-ads-campanha-edit.component.css']
})
export class MetaAdsCampanhaEditComponent extends MetaAdsCampanhaEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: MetaAdsCampanhaApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem(): MetaAdsCampanha {
		let saida = new MetaAdsCampanha();
		saida.produtoProprioId = this.origem.id;
		return saida;
	}

}
