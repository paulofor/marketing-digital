import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBomCrescimentoTemperaturaComponent } from './lista-bom-crescimento-temperatura.component';

describe('ListaBomCrescimentoTemperaturaComponent', () => {
	let component: ListaBomCrescimentoTemperaturaComponent;
	let fixture: ComponentFixture<ListaBomCrescimentoTemperaturaComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ListaBomCrescimentoTemperaturaComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ListaBomCrescimentoTemperaturaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
