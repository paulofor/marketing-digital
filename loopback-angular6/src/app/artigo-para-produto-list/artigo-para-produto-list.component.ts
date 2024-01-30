import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ArtigoParaProdutoApi } from '../shared/sdk';
import { ArtigoParaProdutoListBaseComponent } from './artigo-para-produto-list-base.component';

@Component({
	selector: 'app-artigo-para-produto-list',
  	templateUrl: './artigo-para-produto-list.component.html',
  	styleUrls: ['./artigo-para-produto-list.component.css']
})
export class ArtigoParaProdutoListComponent extends ArtigoParaProdutoListBaseComponent {

	constructor(protected srv: ArtigoParaProdutoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
