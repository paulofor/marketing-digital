import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { MetaAdsCampanha , MetaAdsCampanhaApi } from "../shared/sdk";

export class MetaAdsCampanhaDetalheBaseComponent implements OnInit {
	principal: MetaAdsCampanha;
	idPrincipal: number;
	constructor(protected srv: MetaAdsCampanhaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	posCarregaTela() {}

	ngOnInit() {
		this.carregaTela()
	}
	carregaTela() {
		this.router.params.subscribe((params) => {
		this.idPrincipal = params['id'];
		this.srv.findById(this.idPrincipal, this.getFiltro())
	 		.subscribe((result: MetaAdsCampanha) => {
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
