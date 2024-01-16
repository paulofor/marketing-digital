import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersaoPaginaVendaDetalheComponent } from './versao-pagina-venda-detalhe.component';

describe('VersaoPaginaVendaDetalheComponent', () => {
	let component: VersaoPaginaVendaDetalheComponent;
	let fixture: ComponentFixture<VersaoPaginaVendaDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ VersaoPaginaVendaDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VersaoPaginaVendaDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
