import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { PalavraChaveRaiz , PalavraChaveRaizApi } from "../shared/sdk";

export class PalavraChaveRaizDetalheBaseComponent implements OnInit {
	principal: PalavraChaveRaiz;
	idPrincipal: number;
	constructor(protected srv: PalavraChaveRaizApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	posCarregaTela() {}

	ngOnInit() {
		this.carregaTela()
	}
	carregaTela() {
		this.router.params.subscribe((params) => {
		this.idPrincipal = params['id'];
		this.srv.findById(this.idPrincipal, this.getFiltro())
	 		.subscribe((result: PalavraChaveRaiz) => {
				this.principal = result;
				console.log('principal:', this.principal);
            	this.posCarregaTela();
			})
		})
	}
	getFiltro() {
		return {}
	}
}
