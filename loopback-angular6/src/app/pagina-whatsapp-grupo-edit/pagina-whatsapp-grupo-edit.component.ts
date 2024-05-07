import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PaginaWhatsappGrupo, PaginaWhatsappGrupoApi, WhatsappGrupoApi } from '../shared/sdk';
import { PaginaWhatsappGrupoEditBaseComponent } from './pagina-whatsapp-grupo-edit-base.component';
import { WhatsappGrupo } from '../shared/sdk/models/WhatsappGrupo';

@Component({
	selector: 'app-pagina-whatsapp-grupo-edit',
  	templateUrl: './pagina-whatsapp-grupo-edit.component.html',
  	styleUrls: ['./pagina-whatsapp-grupo-edit.component.css']
})
export class PaginaWhatsappGrupoEditComponent extends PaginaWhatsappGrupoEditBaseComponent {

	listaGrupo: WhatsappGrupo[];

	constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PaginaWhatsappGrupoApi, private srvGrupo: WhatsappGrupoApi
		  ) {
	   super(dialogRef,data,servico);
	}

	montaCombos(): void {
		let filtro = {'where' : {'produtoProprioId' : this.origem.id }}
		console.log(filtro);
		this.srvGrupo.find(filtro)
			.subscribe( (result:WhatsappGrupo[]) => {
				this.listaGrupo = result;
			} )
	}

	criaItem() {
		let saida = new PaginaWhatsappGrupo();
		saida.produtoProprioId = this.origem.id;
		return saida;
	}

}
