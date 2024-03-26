import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaPaginaVendaAbertaDetalheComponent } from './estrutura-pagina-venda-aberta-detalhe.component';

describe('EstruturaPaginaVendaAbertaDetalheComponent', () => {
	let component: EstruturaPaginaVendaAbertaDetalheComponent;
	let fixture: ComponentFixture<EstruturaPaginaVendaAbertaDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ EstruturaPaginaVendaAbertaDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EstruturaPaginaVendaAbertaDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
