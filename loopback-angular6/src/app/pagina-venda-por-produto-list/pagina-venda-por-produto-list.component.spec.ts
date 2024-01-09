import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVendaPorProdutoListComponent } from './pagina-venda-por-produto-list.component';

describe('PaginaVendaPorProdutoListComponent', () => {
	let component: PaginaVendaPorProdutoListComponent;
	let fixture: ComponentFixture<PaginaVendaPorProdutoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaVendaPorProdutoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaVendaPorProdutoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
