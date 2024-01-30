import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ArtigoParaProdutoApi } from '../shared/sdk';
import { ArtigoParaProdutoEditBaseComponent } from './artigo-para-produto-edit-base.component';

@Component({
	selector: 'app-artigo-para-produto-edit',
  	templateUrl: './artigo-para-produto-edit.component.html',
  	styleUrls: ['./artigo-para-produto-edit.component.css']
})
export class ArtigoParaProdutoEditComponent extends ArtigoParaProdutoEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ArtigoParaProdutoApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
