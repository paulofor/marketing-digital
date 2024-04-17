import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CriativoAnuncioApi } from '../shared/sdk';
import { CriativoAnuncioDetalheBaseComponent } from './criativo-anuncio-detalhe-base.component';

@Component({
	selector: 'app-criativo-anuncio-detalhe',
  	templateUrl: './criativo-anuncio-detalhe.component.html',
  	styleUrls: ['./criativo-anuncio-detalhe.component.css']
})
export class CriativoAnuncioDetalheComponent extends CriativoAnuncioDetalheBaseComponent {

	constructor(protected srv: CriativoAnuncioApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
