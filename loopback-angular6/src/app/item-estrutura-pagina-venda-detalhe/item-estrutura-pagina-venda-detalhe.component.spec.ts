import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEstruturaPaginaVendaDetalheComponent } from './item-estrutura-pagina-venda-detalhe.component';

describe('ItemEstruturaPaginaVendaDetalheComponent', () => {
	let component: ItemEstruturaPaginaVendaDetalheComponent;
	let fixture: ComponentFixture<ItemEstruturaPaginaVendaDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ItemEstruturaPaginaVendaDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ItemEstruturaPaginaVendaDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
