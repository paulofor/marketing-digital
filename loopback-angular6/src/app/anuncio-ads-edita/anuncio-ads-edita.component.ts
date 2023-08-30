import { Component, Inject, OnInit } from '@angular/core';
import { AnuncioAds, AnuncioAdsApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseEditComponent } from '../base-component/base-edit-component';

@Component({
  selector: 'app-anuncio-ads-edita',
  templateUrl: './anuncio-ads-edita.component.html',
  styleUrls: ['./anuncio-ads-edita.component.css']
})
export class AnuncioAdsEditaComponent extends BaseEditComponent {

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: AnuncioAdsApi,
  ) {
    super(dialogRef,data,servico);
  }

  criaItem() {
    let novo = new AnuncioAds();
    novo.produtoAfiliadoHotmartId = this.origem.hotmartId;
    return novo;
  }

 

}