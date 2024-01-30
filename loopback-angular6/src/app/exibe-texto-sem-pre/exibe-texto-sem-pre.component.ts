import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-exibe-texto-sem-pre',
  templateUrl: './exibe-texto-sem-pre.component.html',
  styleUrls: ['./exibe-texto-sem-pre.component.css']
})
export class ExibeTextoSemPreComponent implements OnInit {

 
  texto:string = "Objeto";
  titulo:string


  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any) {
  }

  ngOnInit() {
    if (this.data.texto) {
      this.texto = this.data.texto;
    }
    if (this.data.titulo) {
      this.titulo = this.data.titulo;
    }
  }

  copiarTexto() {
    if ((navigator as any).clipboard) {
      (navigator as any).clipboard.writeText(this.texto).then(() => {
        // Ação bem-sucedida
        alert('Texto copiado para a área de transferência!');
      }).catch(err => {
        // Tratamento de erros, se houver
        console.error('Erro ao copiar: ', err);
      });
    } else {
      // Caso a API Clipboard não seja suportada
      console.warn('A API Clipboard não é suportada neste navegador.');
      // Implemente um fallback se necessário
    }
  }
}
