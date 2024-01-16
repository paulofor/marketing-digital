import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentoModeloEditComponent } from './experimento-modelo-edit.component';

describe('ExperimentoModeloEditComponent', () => {
	let component: ExperimentoModeloEditComponent;
	let fixture: ComponentFixture<ExperimentoModeloEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ExperimentoModeloEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ExperimentoModeloEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
