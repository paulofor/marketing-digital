import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escolhe-palavra-chave-para-campanha-teste',
  templateUrl: './escolhe-palavra-chave-para-campanha-teste.component.html',
  styleUrls: ['./escolhe-palavra-chave-para-campanha-teste.component.css']
})
export class EscolhePalavraChaveParaCampanhaTesteComponentextends BaseSelecionaEditComponent{


  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected srvItem: EntidadeApi, protected srvRel: ProcessoEntidadeSaidaRelApi
  ) {
    super(dialogRef, data, srvItem, srvRel );
  }  


  getNomePropriedadeRel(): string {
    return "processoJavaComoSaida";
  }
  criaRelacionamento() {
    return new ProcessoEntidadeSaidaRel();
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



