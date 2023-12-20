import { Component, OnInit } from '@angular/core';
import { ProdutoAfiliadoHotmart, ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { BaseListComponent } from '../base-component/base-list-component';
import { PlataformaEditComponent } from '../plataforma-edit/plataforma-edit.component';
import { ProdutoAfiliadoHotmartEditComponent } from '../produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component';

@Component({
  selector: 'app-produto-afiliado-hotmart-list',
  templateUrl: './produto-afiliado-hotmart-list.component.html',
  styleUrls: ['./produto-afiliado-hotmart-list.component.css']
})
export class ProdutoAfiliadoHotmartListComponent extends BaseListComponent {



  constructor(protected dialog: MatDialog, protected srv:ProdutoAfiliadoHotmartApi) { 
    super(dialog,srv)
  }

  getFiltro() {
    return {
      'order' : 'temperaturaAtual desc',
      'counts' : ['campanhaAdsTestes','anuncioAds','anuncioAdsDisplay'],
      'include' : [
        'contaRemarketing',
        {
          'relation' : 'visitaProdutoHotmarts', 
          'scope' : {'where' : {'maisRecente': 1 }, 'include' : {'relation': 'produtoAfiliadoMetricas', 
                          'scope' : {'order' : 'mediaPesquisaPalavra desc', 'limit' : 5}}}
        },
        'contaGoogle'
      ] 
      };
  }

  criaItem() {
    let novo = new ProdutoAfiliadoHotmart();
    return novo;
  }

  getComponente() {
    return ProdutoAfiliadoHotmartEditComponent;
  }


  


}
