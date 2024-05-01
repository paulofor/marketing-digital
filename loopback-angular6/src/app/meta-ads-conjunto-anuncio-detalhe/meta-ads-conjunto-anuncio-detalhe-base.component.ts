import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { MetaAdsConjuntoAnuncio , MetaAdsConjuntoAnuncioApi } from "../shared/sdk";

export class MetaAdsConjuntoAnuncioDetalheBaseComponent implements OnInit {
	principal: MetaAdsConjuntoAnuncio;
	idPrincipal: number;
	constructor(protected srv: MetaAdsConjuntoAnuncioApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	posCarregaTela() {}

	ngOnInit() {
		this.carregaTela()
	}
	carregaTela() {
		this.router.params.subscribe((params) => {
		this.idPrincipal = params['id'];
		this.srv.findById(this.idPrincipal, this.getFiltro())
	 		.subscribe((result: MetaAdsConjuntoAnuncio) => {
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
