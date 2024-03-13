import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaCampanhaEditComponent } from './agenda-campanha-edit.component';

describe('AgendaCampanhaEditComponent', () => {
	let component: AgendaCampanhaEditComponent;
	let fixture: ComponentFixture<AgendaCampanhaEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AgendaCampanhaEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AgendaCampanhaEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
