import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { VideoVslApi } from '../shared/sdk';
import { VideoVslDetalheBaseComponent } from './video-vsl-detalhe-base.component';
import { TrechoVslEditComponent } from '../trecho-vsl-edit/trecho-vsl-edit.component';

@Component({
	selector: 'app-video-vsl-detalhe',
  	templateUrl: './video-vsl-detalhe.component.html',
  	styleUrls: ['./video-vsl-detalhe.component.css']
})
export class VideoVslDetalheComponent extends VideoVslDetalheBaseComponent {

	constructor(protected srv: VideoVslApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {
			'include' : [
				{'relation' : 'trechoVsls' , 'scope' : { 'order' : 'ordenacao'}},
				{'relation' : 'produtoProprio'}
			]
		}
	}

	editaTrecho(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(TrechoVslEditComponent, {
			width: '800px',
			data: {
				item: edicao,
				origem: this.principal
			}
		});
	}

}
