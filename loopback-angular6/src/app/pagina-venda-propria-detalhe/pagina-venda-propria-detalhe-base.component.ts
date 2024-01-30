import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { PaginaVendaPropria , PaginaVendaPropriaApi } from "../shared/sdk";

export class PaginaVendaPropriaDetalheBaseComponent implements OnInit {
	principal: PaginaVendaPropria;
	idPrincipal: number;
	constructor(protected srv: PaginaVendaPropriaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	posCarregaTela() {}

	ngOnInit() {
		this.carregaTela()
	}
	carregaTela() {
		this.router.params.subscribe((params) => {
		this.idPrincipal = params['id'];
		this.srv.findById(this.idPrincipal, this.getFiltro())
	 		.subscribe((result: PaginaVendaPropria) => {
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
