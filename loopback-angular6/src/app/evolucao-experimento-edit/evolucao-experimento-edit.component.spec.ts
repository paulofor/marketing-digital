import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucaoExperimentoEditComponent } from './evolucao-experimento-edit.component';

describe('EvolucaoExperimentoEditComponent', () => {
	let component: EvolucaoExperimentoEditComponent;
	let fixture: ComponentFixture<EvolucaoExperimentoEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ EvolucaoExperimentoEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EvolucaoExperimentoEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
