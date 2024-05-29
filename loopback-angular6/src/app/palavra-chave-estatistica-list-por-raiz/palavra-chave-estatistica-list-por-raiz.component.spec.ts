import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalavraChaveEstatisticaListPorRaizComponent } from './palavra-chave-estatistica-list-por-raiz.component';

describe('PalavraChaveEstatisticaListPorRaizComponent', () => {
	let component: PalavraChaveEstatisticaListPorRaizComponent;
	let fixture: ComponentFixture<PalavraChaveEstatisticaListPorRaizComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PalavraChaveEstatisticaListPorRaizComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PalavraChaveEstatisticaListPorRaizComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
