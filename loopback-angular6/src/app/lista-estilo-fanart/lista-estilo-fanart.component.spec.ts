import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstiloFanartComponent } from './lista-estilo-fanart.component';

describe('ListaEstiloFanartComponent', () => {
	let component: ListaEstiloFanartComponent;
	let fixture: ComponentFixture<ListaEstiloFanartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ListaEstiloFanartComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ListaEstiloFanartComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
