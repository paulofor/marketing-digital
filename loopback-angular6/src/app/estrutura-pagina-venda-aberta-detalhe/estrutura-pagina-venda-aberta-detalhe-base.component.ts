import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { EstruturaPaginaVendaAberta , EstruturaPaginaVendaAbertaApi } from "../shared/sdk";

export class EstruturaPaginaVendaAbertaDetalheBaseComponent implements OnInit {
	principal: EstruturaPaginaVendaAberta;
	idPrincipal: number;
	constructor(protected srv: EstruturaPaginaVendaAbertaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	posCarregaTela() {}

	ngOnInit() {
		this.carregaTela()
	}
	carregaTela() {
		this.router.params.subscribe((params) => {
		this.idPrincipal = params['id'];
		this.srv.findById(this.idPrincipal, this.getFiltro())
	 		.subscribe((result: EstruturaPaginaVendaAberta) => {
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
