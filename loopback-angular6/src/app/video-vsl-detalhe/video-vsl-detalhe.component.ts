import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { TrechoVslApi, VideoVslApi } from '../shared/sdk';
import { VideoVslDetalheBaseComponent } from './video-vsl-detalhe-base.component';
import { TrechoVslEditComponent } from '../trecho-vsl-edit/trecho-vsl-edit.component';

@Component({
	selector: 'app-video-vsl-detalhe',
  	templateUrl: './video-vsl-detalhe.component.html',
  	styleUrls: ['./video-vsl-detalhe.component.css']
})
export class VideoVslDetalheComponent extends VideoVslDetalheBaseComponent {

	tempoTotal:string;
	tempoMs:number;
	qtdeItem:number;

	constructor(protected srv: VideoVslApi, protected router: ActivatedRoute, protected dialog: MatDialog, private srvTrecho:TrechoVslApi) { 
		super(srv,router,dialog);
	}

	organiza() {
		this.srvTrecho.OrganizaOrdenacao(this.principal.id)
			.subscribe((result) => {
				this.carregaTela();
			})
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

	posCarregaTela(): void {
		this.tempoMs = 0;
		this.qtdeItem = 0;
		for (let i=0;i<this.principal.trechoVsls.length;i++) {
			this.tempoMs += this.principal.trechoVsls[i].tempo;
			this.qtdeItem++;
		}
		this.tempoTotal = this.milissegundosParaMinutoSegundo(this.tempoMs);
	}

	milissegundosParaMinutoSegundo(total_tempo: number): string {
		// Convertendo milissegundos para segundos
		const segundosTotal = Math.floor(total_tempo / 1000);
		// Calculando os minutos e segundos
		const minutos = Math.floor(segundosTotal / 60);
		const segundos = segundosTotal % 60;
	
		// Formatando o resultado
		const minutosFormatados = minutos < 10 ? `0${minutos}` : `${minutos}`;
		const segundosFormatados = segundos < 10 ? `0${segundos}` : `${segundos}`;
	
		return `${minutosFormatados}:${segundosFormatados}`;
	}
}
