import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { IdeiaPalavraChaveApi } from '../shared/sdk';
import { IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent } from './ideia-palavra-chave-list-simples-top-pesquisa-base.component';

@Component({
	selector: 'app-ideia-palavra-chave-list-simples-top-pesquisa',
  	templateUrl: './ideia-palavra-chave-list-simples-top-pesquisa.component.html',
  	styleUrls: ['./ideia-palavra-chave-list-simples-top-pesquisa.component.css']
})
export class IdeiaPalavraChaveListSimplesTopPesquisaComponent extends IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent {

	constructor(protected srv: IdeiaPalavraChaveApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	carregaTela() {
        this.srv.ListaTopPesquisa()
	     .subscribe((result:any[]) => {
            console.log('result: ' , result);
            this.listaBase = result;
            this.posCarregaLista();
        })
    }

	classeCor(item) {
		if (item.cpcMinimoTopPage > 0) {
			if (item.cpcPara50 > item.cpcMinimoTopPage ) return 'corAzul';
			else return 'corVermelho'
		} else {
			return 'corVerde'
		}
	}
}
