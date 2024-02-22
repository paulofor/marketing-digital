import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProdutoProprio, VideoVslApi } from '../shared/sdk';
import { VideoVslPorProdutoListBaseComponent } from './video-vsl-por-produto-list-base.component';

@Component({
	selector: 'app-video-vsl-por-produto-list',
  	templateUrl: './video-vsl-por-produto-list.component.html',
  	styleUrls: ['./video-vsl-por-produto-list.component.css']
})
export class VideoVslPorProdutoListComponent extends VideoVslPorProdutoListBaseComponent {

	@Input() produto: ProdutoProprio | null;

	constructor(protected srv: VideoVslApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}


	getFiltro() {
		console.log('produto:' , this.produto);
		return {'where' : {'produtoProprioId' : this.produto.id}}
	}
}
