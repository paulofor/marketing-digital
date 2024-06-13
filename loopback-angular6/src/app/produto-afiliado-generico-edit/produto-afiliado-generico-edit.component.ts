import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProdutoAfiliadoGenericoApi } from '../shared/sdk';
import { ProdutoAfiliadoGenericoEditBaseComponent } from './produto-afiliado-generico-edit-base.component';

@Component({
	selector: 'app-produto-afiliado-generico-edit',
  	templateUrl: './produto-afiliado-generico-edit.component.html',
  	styleUrls: ['./produto-afiliado-generico-edit.component.css']
})
export class ProdutoAfiliadoGenericoEditComponent extends ProdutoAfiliadoGenericoEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ProdutoAfiliadoGenericoApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
