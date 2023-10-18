import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { IdeiaPalavraChaveApi } from '../shared/sdk';
import { IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent } from './ideia-palavra-chave-list-simples-melhores-cpc-base.component';

@Component({
	selector: 'app-ideia-palavra-chave-list-simples-melhores-cpc',
  	templateUrl: './ideia-palavra-chave-list-simples-melhores-cpc.component.html',
  	styleUrls: ['./ideia-palavra-chave-list-simples-melhores-cpc.component.css']
})
export class IdeiaPalavraChaveListSimplesMelhoresCpcComponent extends IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent {

	constructor(protected srv: IdeiaPalavraChaveApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	carregaTela() {
        this.srv.MelhoresCpcComVisita(150)
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
