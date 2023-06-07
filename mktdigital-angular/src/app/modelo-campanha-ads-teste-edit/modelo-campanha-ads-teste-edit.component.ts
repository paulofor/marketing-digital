import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseEditComponent } from '../base-component/base-edit-component';
import { ModeloCampanhaAdsTeste, ModeloCampanhaAdsTesteApi } from '../shared/sdk';

@Component({
  selector: 'app-modelo-campanha-ads-teste-edit',
  templateUrl: './modelo-campanha-ads-teste-edit.component.html',
  styleUrls: ['./modelo-campanha-ads-teste-edit.component.css']
})
export class ModeloCampanhaAdsTesteEditComponent extends BaseEditComponent {

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ModeloCampanhaAdsTesteApi,
  ) {
    super(dialogRef,data,servico);
  }

  criaItem() {
    let novo = new ModeloCampanhaAdsTeste();
    return novo;
  }

 

}