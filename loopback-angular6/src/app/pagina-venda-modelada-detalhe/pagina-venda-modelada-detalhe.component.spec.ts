import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVendaModeladaDetalheComponent } from './pagina-venda-modelada-detalhe.component';

describe('PaginaVendaModeladaDetalheComponent', () => {
	let component: PaginaVendaModeladaDetalheComponent;
	let fixture: ComponentFixture<PaginaVendaModeladaDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaVendaModeladaDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaVendaModeladaDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
