import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseSelecionaEditComponent } from '../base-component/base-seleciona-component';
import { PalavraChaveCampanhaAdsTesteApi, PalavraChaveCampanhaAdsTeste, IdeiaPalavraChaveApi } from '../shared/sdk';

@Component({
  selector: 'app-escolhe-palavra-chave-para-campanha-teste',
  templateUrl: './escolhe-palavra-chave-para-campanha-teste.component.html',
  styleUrls: ['./escolhe-palavra-chave-para-campanha-teste.component.css']
})
export class EscolhePalavraChaveParaCampanhaTesteComponent extends BaseSelecionaEditComponent{


  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected srvItem: IdeiaPalavraChaveApi, protected srvRel: PalavraChaveCampanhaAdsTesteApi
  ) {
    super(dialogRef, data, srvItem, srvRel );
  }  


  getNomePropriedadeRel(): string {
    return "palavraChaveCampanhaAdsTestes";
  }
  criaRelacionamento() {
    return new PalavraChaveCampanhaAdsTeste();
  }
  getNomeChaveItem(): string {
    return "id";
  }
  getNomeChaveItemNoRelacionamento(): string {
    return "ideiaPalavraChaveId";
  }
  getNomeChaveOrigemNoRelacionamento(): string {
    return "campanhaAdsTesteId";
  }
  getNomeFuncaoAtualizacaoRelacionamento(): string {
    return "AtualizaPalavraChavePorCampanhaAdsTeste";
  }

  getFiltro() {
    return {
      'where' : { 'and' : [{'hotmartId' : this.origem.produtoAfiliadoHotmartId}, {'maisRecenteProduto' : 1}] },
      'order' : 'mediaPesquisa desc' ,
      'limit' : 20,
      'include' : {
        'relation' : 'palavraChaveCampanhaAdsTestes',
        'scope' : {
          'where' : {'campanhaAdsTesteId' : this.origem.id }
        } 
      }
    }
  }

}



