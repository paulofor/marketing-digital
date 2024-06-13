import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PlayerApi } from '../shared/sdk';
import { PlayerListBaseComponent } from './player-list-base.component';

@Component({
	selector: 'app-player-list',
  	templateUrl: './player-list.component.html',
  	styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent extends PlayerListBaseComponent {

	constructor(protected srv: PlayerApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {
			'order' : 'nome'
		}
	}

}
