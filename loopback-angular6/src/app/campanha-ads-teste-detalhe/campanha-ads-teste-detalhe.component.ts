import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { BaseItemIdComponent } from '../base-component/base-item-id-component';
import { CampanhaAdsTeste, CampanhaAdsTesteApi } from '../shared/sdk';
import { EscolheAnuncioParaCampanhaTesteComponent } from '../escolhe-anuncio-para-campanha-teste/escolhe-anuncio-para-campanha-teste.component';
import { EscolhePalavraChaveParaCampanhaTesteComponent } from '../escolhe-palavra-chave-para-campanha-teste/escolhe-palavra-chave-para-campanha-teste.component';

@Component({
  selector: 'app-campanha-ads-teste-detalhe',
  templateUrl: './campanha-ads-teste-detalhe.component.html',
  styleUrls: ['./campanha-ads-teste-detalhe.component.css']
})
export class CampanhaAdsTesteDetalheComponent extends BaseItemIdComponent{

  constructor(protected dialog: MatDialog, protected srv: CampanhaAdsTesteApi, protected router: ActivatedRoute) {
    super(dialog, srv, router);
  }

  
  getFiltro() {
    return {
      'include' : [
        {'relation':'anuncioCampanhaAdsTestes' , 'scope' : {'include' : 'anuncioAds'}},
        {'relation' : 'palavraChaveCampanhaAdsTestes' , 'scope' : {'include' : 'ideiaPalavraChave'}},
        {'relation' : 'produtoAfiliadoHotmart'} ,
        {'relation' : 'modeloCampanhaAdsTeste'} ,
        {'relation' : 'contaGoogle'}
      ]
    }
  }

  editaAnuncio(origem,edicao) {
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaTela();
    });
    this.dialog.open(EscolheAnuncioParaCampanhaTesteComponent, {
      width: '800px',
      data: {
        item: edicao,
        origem: origem
      }
    });
  }
  editaPalavraChave(origem1,edicao?) {
    console.log('campanha', origem1);
    let campanha = new CampanhaAdsTeste();
    campanha.id = origem1.id;
    campanha.produtoAfiliadoHotmartId = origem1.produtoAfiliadoHotmartId;
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaTela();
    });
    this.dialog.open(EscolhePalavraChaveParaCampanhaTesteComponent, {
      width: '1000px',
      data: {
        item: edicao,
        origem: origem1
      }
    });
  }

  /*
  edita(edicao?) {
    this.dialog.afterAllClosed.subscribe(result => {
        this.carregaTela();
    });
    this.dialog.open(this.getComponente(), {
        width: '800px',
        data: {
            item: edicao,
            origem: this.principal
        }
    });
  }

  getComponente() {
    return CampanhaAdsTesteEditComponent;
  }
  */

}
