import { Component, OnInit } from '@angular/core';
import { ModeloCampanhaAdsTeste, ModeloCampanhaAdsTesteApi } from '../shared/sdk';
import { ModeloCampanhaAdsTesteEditComponent } from '../modelo-campanha-ads-teste-edit/modelo-campanha-ads-teste-edit.component';
import { MatDialog } from '@angular/material';
import { BaseListComponent } from '../base-component/base-list-component';

@Component({
  selector: 'app-modelo-campanha-ads-teste-list',
  templateUrl: './modelo-campanha-ads-teste-list.component.html',
  styleUrls: ['./modelo-campanha-ads-teste-list.component.css']
})
export class ModeloCampanhaAdsTesteListComponent extends BaseListComponent {



  constructor(protected dialog: MatDialog, protected srv:ModeloCampanhaAdsTesteApi) { 
    super(dialog,srv)
  }

  getFiltro() {
    return {
      };
  }

  criaItem() {
    let novo = new ModeloCampanhaAdsTeste();
    return novo;
  }

  getComponente() {
    return ModeloCampanhaAdsTesteEditComponent;
  }


  


}