import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { VisitaProdutoHotmart, VisitaProdutoHotmartApi } from '../shared/sdk';
import { ListaEstiloFanartBaseComponent } from './lista-estilo-fanart-base.component';

@Component({
	selector: 'app-lista-estilo-fanart',
  	templateUrl: './lista-estilo-fanart.component.html',
  	styleUrls: ['./lista-estilo-fanart.component.css']
})
export class ListaEstiloFanartComponent extends ListaEstiloFanartBaseComponent {

	constructor(protected srv: VisitaProdutoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}


	carregaTela() {
        this.srv.ListaEstiloFanart()
	     .subscribe((result:VisitaProdutoHotmart[]) => {
            console.log('result: ' , result);
            this.listaBase = result;
            this.posCarregaLista();
        })
    }

}
