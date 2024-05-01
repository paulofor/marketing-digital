import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { MetaAdsCampanhaMetrica , MetaAdsCampanhaMetricaApi } from "../shared/sdk";

export class MetaAdsCampanhaMetricaListSimplesBaseComponent implements OnInit {
	principal: MetaAdsCampanhaMetrica;
	listaBase:MetaAdsCampanhaMetrica[]
	idPrincipal: number;
	constructor(protected srv: MetaAdsCampanhaMetricaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	ngOnInit() {
    	this.preCarregaTela();
       	this.carregaTela();
   	}

    preCarregaTela() {}
	posCarregaLista() {}

    carregaTela() {
        this.srv.find(this.getFiltro())
	     .subscribe((result:MetaAdsCampanhaMetrica[]) => {
            console.log('result: ' , result);
            this.listaBase = result;
            this.posCarregaLista();
        })
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
