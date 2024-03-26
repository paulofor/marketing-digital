import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { PaginaVendaAberta , PaginaVendaAbertaApi } from "../shared/sdk";

export class PaginaVendaAbertaDetalheBaseComponent implements OnInit {
	principal: PaginaVendaAberta;
	idPrincipal: number;
	constructor(protected srv: PaginaVendaAbertaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	posCarregaTela() {}

	ngOnInit() {
		this.carregaTela()
	}
	carregaTela() {
		this.router.params.subscribe((params) => {
		this.idPrincipal = params['id'];
		this.srv.findById(this.idPrincipal, this.getFiltro())
	 		.subscribe((result: PaginaVendaAberta) => {
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
