import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptGeraVideoListComponent } from './script-gera-video-list.component';

describe('ScriptGeraVideoListComponent', () => {
	let component: ScriptGeraVideoListComponent;
	let fixture: ComponentFixture<ScriptGeraVideoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ScriptGeraVideoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ScriptGeraVideoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
