import { Component, Inject, OnInit } from '@angular/core';
import { BaseItemIdComponent } from '../base-component/base-item-id-component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CampanhaAdsTeste, CampanhaAdsTesteApi, ModeloCampanhaAdsTeste, ModeloCampanhaAdsTesteApi } from '../shared/sdk';
import { BaseEditComponent } from '../base-component/base-edit-component';

@Component({
  selector: 'app-campanha-ads-teste-edit',
  templateUrl: './campanha-ads-teste-edit.component.html',
  styleUrls: ['./campanha-ads-teste-edit.component.css']
})
export class CampanhaAdsTesteEditComponent extends BaseEditComponent {

  listaModelo:ModeloCampanhaAdsTeste[];


  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: CampanhaAdsTesteApi, private srvModelo:ModeloCampanhaAdsTesteApi
  ) {
    super(dialogRef,data,servico);
  }

  criaItem() {
    let novo = new CampanhaAdsTeste();
    novo.produtoAfiliadoHotmartId = this.origem.hotmartId;
    return novo;
  }


  montaCombos(): void {
      this.srvModelo.find()
        .subscribe((result:ModeloCampanhaAdsTeste[]) => {
          this.listaModelo = result;
        })
  }
 
}