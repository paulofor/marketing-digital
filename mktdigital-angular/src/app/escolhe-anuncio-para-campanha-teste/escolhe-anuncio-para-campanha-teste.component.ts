import { Component, Inject, OnInit } from '@angular/core';
import { BaseSelecionaEditComponent } from '../base-component/base-seleciona-component';
import { AnuncioAdsApi, AnuncioCampanhaAdsTeste, AnuncioCampanhaAdsTesteApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-escolhe-anuncio-para-campanha-teste',
  templateUrl: './escolhe-anuncio-para-campanha-teste.component.html',
  styleUrls: ['./escolhe-anuncio-para-campanha-teste.component.css']
})
export class EscolheAnuncioParaCampanhaTesteComponent extends BaseSelecionaEditComponent{


  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected srvItem: AnuncioAdsApi, protected srvRel: AnuncioCampanhaAdsTesteApi
  ) {
    super(dialogRef, data, srvItem, srvRel );
  }  


  getNomePropriedadeRel(): string {
    return "anuncioCampanhaAdsTestes";
  }
  criaRelacionamento() {
    return new AnuncioCampanhaAdsTeste();
  }
  getNomeChaveItem(): string {
    return "id";
  }
  getNomeChaveItemNoRelacionamento(): string {
    return "anuncioAdsId";
  }
  getNomeChaveOrigemNoRelacionamento(): string {
    return "campanhaAdsTesteId";
  }
  getNomeFuncaoAtualizacaoRelacionamento(): string {
    return "AtualizaPorCampanhaAdsTeste";
  }

  getFiltro() {
    return {
      'where' : {'produtoAfiliadoHotmartId' : this.origem.produtoAfiliadoHotmartId},
      'include' : {
        'relation' : 'anuncioCampanhaAdsTestes',
        'scope' : {
          'where' : {'campanhaAdsTesteId' : this.origem.id }
        } 
      }
    }
  }

}



