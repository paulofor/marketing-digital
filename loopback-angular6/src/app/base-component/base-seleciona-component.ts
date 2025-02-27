import { Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export abstract class BaseSelecionaEditComponent implements OnInit{

    listaItem:any[];

    item: any;
    origem: any;

    constructor(protected dialogRef: MatDialogRef<any>
        , @Inject(MAT_DIALOG_DATA) protected data: any, protected srvItem: any, protected srvRel: any
      ) {
      }
    

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (this.data.origem!=null) {
      this.origem = this.data.origem;
    }
    console.log('this.origem:' , this.origem);
    this.srvItem.find(this.getFiltro())
      .subscribe((result: any[]) => {
        this.listaItem = result;
        console.log('ListaItem(BaseSelecionaEditComponent):' , this.listaItem);
      })

  }

  onChange(event, index, item : any) {
    if (event.checked) {
      let relNovo = this.criaRelacionamento();
      relNovo[this.getNomeChaveOrigemNoRelacionamento()] = this.origem.id;
      relNovo[this.getNomeChaveItemNoRelacionamento()] = item[this.getNomeChaveItem()];
      item[this.getNomePropriedadeRel()].push(relNovo);
    } else {
      item[this.getNomePropriedadeRel()] = [];
    }
  }
  
  onSubmit() {
    let listaEnvio:any[] = [];
    for(let i=0;i<this.listaItem.length;i++) {
      if (this.listaItem[i][this.getNomePropriedadeRel()].length>0) {
        listaEnvio.push(this.listaItem[i][this.getNomePropriedadeRel()][0]);
      }
    };
    //console.log('Procurando ' , this.getNomeFuncaoAtualizacaoRelacionamento , ' em ' , this.srvRel);
    console.log('Envio Lista: ' , listaEnvio);
    console.log('Envio Id' , this.origem.id);
    this.srvRel[this.getNomeFuncaoAtualizacaoRelacionamento()](this.origem.id, listaEnvio)
      .subscribe((resultado) => {
        this.dialogRef.close('Pizza!');
      })
  }
  getCheck(item:any) : boolean {
    //console.log('Procurando:' , this.getNomePropriedadeRel() , " em " , item);
    return (item[this.getNomePropriedadeRel()].length>0);
  }

  abstract getNomePropriedadeRel(): string;
  abstract criaRelacionamento();
  abstract getNomeChaveItem(): string;
  abstract getNomeChaveItemNoRelacionamento(): string;
  abstract getNomeChaveOrigemNoRelacionamento(): string;
  abstract getNomeFuncaoAtualizacaoRelacionamento() : string;

  getFiltro() {
      return {};
  }

 
 
}