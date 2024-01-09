import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { SecaoWebApi } from '../shared/sdk';
import { SecaoWebPorProdutoListBaseComponent } from './secao-web-por-produto-list-base.component';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
	selector: 'app-secao-web-por-produto-list',
  	templateUrl: './secao-web-por-produto-list.component.html',
  	styleUrls: ['./secao-web-por-produto-list.component.css']
})
export class SecaoWebPorProdutoListComponent extends SecaoWebPorProdutoListBaseComponent {

	css: string = 'p { font-weight: bold; }'; // Exemplo de estilos CSS

	constructor(protected srv: SecaoWebApi, protected router: ActivatedRoute, protected dialog: MatDialog,private sanitizer: DomSanitizer) { 
		super(srv,router,dialog);
	}


	getEstilos() {
		return this.sanitizer.bypassSecurityTrustStyle(this.css);
	  }
}
