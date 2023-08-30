import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAfiliadoHotmartDetalheComponent } from './produto-afiliado-hotmart-detalhe.component';

describe('ProdutoAfiliadoHotmartDetalheComponent', () => {
	let component: ProdutoAfiliadoHotmartDetalheComponent;
	let fixture: ComponentFixture<ProdutoAfiliadoHotmartDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ProdutoAfiliadoHotmartDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProdutoAfiliadoHotmartDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
