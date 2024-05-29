import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ImagemConjuntoApi } from '../shared/sdk';
import { ImagemConjuntoListMelhoresBaseComponent } from './imagem-conjunto-list-melhores-base.component';

@Component({
	selector: 'app-imagem-conjunto-list-melhores',
  	templateUrl: './imagem-conjunto-list-melhores.component.html',
  	styleUrls: ['./imagem-conjunto-list-melhores.component.css']
})
export class ImagemConjuntoListMelhoresComponent extends ImagemConjuntoListMelhoresBaseComponent {

	constructor(protected srv: ImagemConjuntoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
