import { Component, OnInit } from '@angular/core';
import { PixelGoogle, PixelGoogleApi } from '../shared/sdk';
import { PixelGoogleEditComponent } from '../pixel-google-edit/pixel-google-edit.component';
import { MatDialog } from '@angular/material';
import { BaseListComponent } from '../base-component/base-list-component';

@Component({
  selector: 'app-pixel-google-list',
  templateUrl: './pixel-google-list.component.html',
  styleUrls: ['./pixel-google-list.component.css']
})
export class PixelGoogleListComponent  extends BaseListComponent {



  constructor(protected dialog: MatDialog, protected srv:PixelGoogleApi) { 
    super(dialog,srv)
  }

  getFiltro() {
    return {
      'order' : 'id desc'
      };
  }

  criaItem() {
    let novo = new PixelGoogle();
    return novo;
  }

  getComponente() {
    return PixelGoogleEditComponent;
  }


  


}