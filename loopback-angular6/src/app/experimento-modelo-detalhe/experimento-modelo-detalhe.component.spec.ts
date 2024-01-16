import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentoModeloDetalheComponent } from './experimento-modelo-detalhe.component';

describe('ExperimentoModeloDetalheComponent', () => {
	let component: ExperimentoModeloDetalheComponent;
	let fixture: ComponentFixture<ExperimentoModeloDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ExperimentoModeloDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ExperimentoModeloDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
