import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { WhatsappGrupoPadraoMensagemApi } from '../shared/sdk';
import { WhatsappGrupoPadraoMensagemTextoDetalheBaseComponent } from './whatsapp-grupo-padrao-mensagem-texto-detalhe-base.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
	selector: 'app-whatsapp-grupo-padrao-mensagem-texto-detalhe',
  	templateUrl: './whatsapp-grupo-padrao-mensagem-texto-detalhe.component.html',
  	styleUrls: ['./whatsapp-grupo-padrao-mensagem-texto-detalhe.component.css']
})
export class WhatsappGrupoPadraoMensagemTextoDetalheComponent extends WhatsappGrupoPadraoMensagemTextoDetalheBaseComponent {

	constructor(protected srv: WhatsappGrupoPadraoMensagemApi, protected router: ActivatedRoute, protected dialog: MatDialog,
		private sanitizer: DomSanitizer) { 
		super(srv,router,dialog);
	}

	/*
	posCarregaTela(): void {
		const transformedArray: TransformedItem[] = [];
	
		originalArray.forEach(item => {
		const existingItem = transformedArray.find(transformedItem => transformedItem.dia === item.dia);
		if (existingItem) {
			existingItem.indice.push(item.indice);
		} else {
			transformedArray.push({
				dia: item.dia,
				indice: [item.indice]
			});
		}
		
		});

	}
	*/

	ajustaTexto(texto: string): SafeHtml {
		// Substitui as quebras de linha por <br>
		const textoFormatado = texto.replace(/\n/g, '<br/>');
		// Retorna o texto formatado como HTML seguro
		return this.sanitizer.bypassSecurityTrustHtml(textoFormatado);
	}
	
	getFiltro(): {} {
		return {
			'include' : {'relation' : 'whatsappMensagemTextos' , 'scope' : {
				'order' : ['numeroDia' , 'indiceDia']
			}}
		}
	}
}
