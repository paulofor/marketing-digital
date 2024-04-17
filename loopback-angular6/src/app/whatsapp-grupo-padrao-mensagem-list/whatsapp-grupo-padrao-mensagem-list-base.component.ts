import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { WhatsappGrupoPadraoMensagem , WhatsappGrupoPadraoMensagemApi } from "../shared/sdk";
import { WhatsappGrupoPadraoMensagemEditComponent } from "../whatsapp-grupo-padrao-mensagem-edit/whatsapp-grupo-padrao-mensagem-edit.component";

export class WhatsappGrupoPadraoMensagemListBaseComponent implements OnInit {
	principal: WhatsappGrupoPadraoMensagem;
	listaBase:WhatsappGrupoPadraoMensagem[]
	idPrincipal: number;
	constructor(protected srv: WhatsappGrupoPadraoMensagemApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	ngOnInit() {
    	this.preCarregaTela();
       	this.carregaTela();
   	}

    preCarregaTela() {}
	posCarregaLista() {}

    carregaTela() {
        this.srv.find(this.getFiltro())
	     .subscribe((result:WhatsappGrupoPadraoMensagem[]) => {
            console.log('result: ' , result);
            this.listaBase = result;
            this.posCarregaLista();
        })
    }

	edita(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(this.getComponente(), {
			width: '800px',
			data: {
				item: edicao
			}
		});
	}
	getComponente() : any {
		return WhatsappGrupoPadraoMensagemEditComponent
	}


	dialogo1(dados) {
        console.log('dialogo1.dados:' , dados);
        this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(this.getDialogo1(), {
            width: '800px',
            data: dados
        });
	}
	getDialogo1() : any {
	}


    dialogo2(dados) {
    	console.log('dialogo2.dados:' , dados);
    	this.dialog.afterAllClosed.subscribe(result => {
 			this.carregaTela();
   		});
   		this.dialog.open(this.getDialogo2(), {
			width: '800px',
   			data: dados
  		});
  	}
 	getDialogo2() : any {
    }


	getFiltro() {
		return {}
	}
}
