import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { VisitaProdutoHotmartApi } from '../shared/sdk';
import { VisitaProdutoHotmartResumoBaseComponent } from './visita-produto-hotmart-resumo-base.component';

@Component({
	selector: 'app-visita-produto-hotmart-resumo',
  	templateUrl: './visita-produto-hotmart-resumo.component.html',
  	styleUrls: ['./visita-produto-hotmart-resumo.component.css']
})
export class VisitaProdutoHotmartResumoComponent extends VisitaProdutoHotmartResumoBaseComponent {

	listaPrincipal : any[];

	constructor(protected srv: VisitaProdutoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	carregaTela() {
        this.srv.ResumoPorDataInsercao()
	     .subscribe((result:any[]) => {
            console.log('lista: ' , result);
            this.listaPrincipal = result;
            this.posCarregaLista();
        })
    }
}
