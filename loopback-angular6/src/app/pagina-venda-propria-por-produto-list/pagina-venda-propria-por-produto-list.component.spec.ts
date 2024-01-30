import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVendaPropriaPorProdutoListComponent } from './pagina-venda-propria-por-produto-list.component';

describe('PaginaVendaPropriaPorProdutoListComponent', () => {
	let component: PaginaVendaPropriaPorProdutoListComponent;
	let fixture: ComponentFixture<PaginaVendaPropriaPorProdutoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaVendaPropriaPorProdutoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaVendaPropriaPorProdutoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
