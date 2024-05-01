import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { WhatsappGrupoPadraoMensagem , WhatsappGrupoPadraoMensagemApi } from "../shared/sdk";

export class WhatsappGrupoPadraoMensagemTextoDetalheBaseComponent implements OnInit {
	principal: WhatsappGrupoPadraoMensagem;
	idPrincipal: number;
	constructor(protected srv: WhatsappGrupoPadraoMensagemApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	posCarregaTela() {}

	ngOnInit() {
		this.carregaTela()
	}
	carregaTela() {
		this.router.params.subscribe((params) => {
		this.idPrincipal = params['id'];
		this.srv.findById(this.idPrincipal, this.getFiltro())
	 		.subscribe((result: WhatsappGrupoPadraoMensagem) => {
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
