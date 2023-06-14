import { Component, OnInit } from '@angular/core';
import { BaseSelecionaEditComponent } from '../base-component/base-seleciona-component';
import { AnuncioAdsApi } from '../shared/sdk';

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
    return "processoJavaComoSaida";
  }
  criaRelacionamento() {
    return new AnuncioCampanhaAdsTeste();
  }
  getNomeChaveItem(): string {
    return "id";
  }
  getNomeChaveItemNoRelacionamento(): string {
    return "entidadeId";
  }
  getNomeChaveOrigemNoRelacionamento(): string {
    return "processoJavaId";
  }
  getNomeFuncaoAtualizacaoRelacionamento(): string {
    return "AtualizaPorProcessoSaida";
  }

  getFiltro() {
    return {
      'where' : {'sistemaId' : this.origem.sistemaId},
      'order' : 'nome',
      'include' : {
        'relation' : 'processoJavaComoSaida',
        'scope' : {
          'where' : {'entidadeId' : this.origem.id }
        } 
      }
    }
  }

}



