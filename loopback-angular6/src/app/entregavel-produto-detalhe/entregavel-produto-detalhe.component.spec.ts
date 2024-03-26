import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregavelProdutoDetalheComponent } from './entregavel-produto-detalhe.component';

describe('EntregavelProdutoDetalheComponent', () => {
	let component: EntregavelProdutoDetalheComponent;
	let fixture: ComponentFixture<EntregavelProdutoDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ EntregavelProdutoDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EntregavelProdutoDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
