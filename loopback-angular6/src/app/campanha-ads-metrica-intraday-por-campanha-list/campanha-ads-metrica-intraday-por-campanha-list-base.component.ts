import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { CampanhaAdsMetricaIntraday , CampanhaAdsMetricaIntradayApi } from "../shared/sdk";

export class CampanhaAdsMetricaIntradayPorCampanhaListBaseComponent implements OnInit {
	principal: CampanhaAdsMetricaIntraday;
	listaBase:CampanhaAdsMetricaIntraday[]
	idPrincipal: number;
	constructor(protected srv: CampanhaAdsMetricaIntradayApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	ngOnInit() {
    	this.preCarregaTela();
       	this.carregaTela();
   	}

    preCarregaTela() {}
	posCarregaLista() {}

    carregaTela() {
        this.srv.find(this.getFiltro())
	     .subscribe((result:CampanhaAdsMetricaIntraday[]) => {
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
