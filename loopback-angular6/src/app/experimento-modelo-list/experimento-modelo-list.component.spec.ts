import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentoModeloListComponent } from './experimento-modelo-list.component';

describe('ExperimentoModeloListComponent', () => {
	let component: ExperimentoModeloListComponent;
	let fixture: ComponentFixture<ExperimentoModeloListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ExperimentoModeloListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ExperimentoModeloListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
