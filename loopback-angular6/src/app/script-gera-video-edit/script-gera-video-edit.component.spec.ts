import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptGeraVideoEditComponent } from './script-gera-video-edit.component';

describe('ScriptGeraVideoEditComponent', () => {
	let component: ScriptGeraVideoEditComponent;
	let fixture: ComponentFixture<ScriptGeraVideoEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ScriptGeraVideoEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ScriptGeraVideoEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
