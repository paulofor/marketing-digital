import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVendaAbertaDetalheComponent } from './pagina-venda-aberta-detalhe.component';

describe('PaginaVendaAbertaDetalheComponent', () => {
	let component: PaginaVendaAbertaDetalheComponent;
	let fixture: ComponentFixture<PaginaVendaAbertaDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaVendaAbertaDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaVendaAbertaDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
