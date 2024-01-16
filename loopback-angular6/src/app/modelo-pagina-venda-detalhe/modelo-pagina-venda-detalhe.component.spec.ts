import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloPaginaVendaDetalheComponent } from './modelo-pagina-venda-detalhe.component';

describe('ModeloPaginaVendaDetalheComponent', () => {
	let component: ModeloPaginaVendaDetalheComponent;
	let fixture: ComponentFixture<ModeloPaginaVendaDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ModeloPaginaVendaDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ModeloPaginaVendaDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
