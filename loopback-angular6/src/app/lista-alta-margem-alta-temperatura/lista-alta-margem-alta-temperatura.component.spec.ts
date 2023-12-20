import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAltaMargemAltaTemperaturaComponent } from './lista-alta-margem-alta-temperatura.component';

describe('ListaAltaMargemAltaTemperaturaComponent', () => {
	let component: ListaAltaMargemAltaTemperaturaComponent;
	let fixture: ComponentFixture<ListaAltaMargemAltaTemperaturaComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ListaAltaMargemAltaTemperaturaComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ListaAltaMargemAltaTemperaturaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
