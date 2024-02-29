import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVendaVslPorProdutoListComponent } from './pagina-venda-vsl-por-produto-list.component';

describe('PaginaVendaVslPorProdutoListComponent', () => {
	let component: PaginaVendaVslPorProdutoListComponent;
	let fixture: ComponentFixture<PaginaVendaVslPorProdutoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaVendaVslPorProdutoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaVendaVslPorProdutoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
