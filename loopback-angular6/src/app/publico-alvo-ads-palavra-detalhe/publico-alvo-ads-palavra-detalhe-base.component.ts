import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { PublicoAlvoAdsPalavra , PublicoAlvoAdsPalavraApi } from "../shared/sdk";

export class PublicoAlvoAdsPalavraDetalheBaseComponent implements OnInit {
	principal: PublicoAlvoAdsPalavra;
	idPrincipal: number;
	constructor(protected srv: PublicoAlvoAdsPalavraApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	posCarregaTela() {}

	ngOnInit() {
		this.carregaTela()
	}
	carregaTela() {
		this.router.params.subscribe((params) => {
		this.idPrincipal = params['id'];
		this.srv.findById(this.idPrincipal, this.getFiltro())
	 		.subscribe((result: PublicoAlvoAdsPalavra) => {
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
