import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVendaPropriaDetalheComponent } from './pagina-venda-propria-detalhe.component';

describe('PaginaVendaPropriaDetalheComponent', () => {
	let component: PaginaVendaPropriaDetalheComponent;
	let fixture: ComponentFixture<PaginaVendaPropriaDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaVendaPropriaDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaVendaPropriaDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
