import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ScriptGeraVideoApi } from '../shared/sdk';
import { ScriptGeraVideoListBaseComponent } from './script-gera-video-list-base.component';

@Component({
	selector: 'app-script-gera-video-list',
  	templateUrl: './script-gera-video-list.component.html',
  	styleUrls: ['./script-gera-video-list.component.css']
})
export class ScriptGeraVideoListComponent extends ScriptGeraVideoListBaseComponent {

	constructor(protected srv: ScriptGeraVideoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
