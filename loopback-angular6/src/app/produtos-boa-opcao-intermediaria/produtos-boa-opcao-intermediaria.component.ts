import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { VisitaProdutoHotmart, VisitaProdutoHotmartApi } from '../shared/sdk';
import { ProdutosBoaOpcaoIntermediariaBaseComponent } from './produtos-boa-opcao-intermediaria-base.component';

@Component({
	selector: 'app-produtos-boa-opcao-intermediaria',
  	templateUrl: './produtos-boa-opcao-intermediaria.component.html',
  	styleUrls: ['./produtos-boa-opcao-intermediaria.component.css']
})
export class ProdutosBoaOpcaoIntermediariaComponent extends ProdutosBoaOpcaoIntermediariaBaseComponent {

	constructor(protected srv: VisitaProdutoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	carregaTela() {
        this.srv.ListaBoaOpcaoIntermediaria()
	     .subscribe((result:VisitaProdutoHotmart[]) => {
            console.log('result: ' , result);
            this.listaBase = result;
            this.posCarregaLista();
        })
    }

}
