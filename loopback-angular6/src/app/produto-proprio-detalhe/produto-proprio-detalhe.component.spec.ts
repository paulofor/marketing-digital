import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoProprioDetalheComponent } from './produto-proprio-detalhe.component';

describe('ProdutoProprioDetalheComponent', () => {
	let component: ProdutoProprioDetalheComponent;
	let fixture: ComponentFixture<ProdutoProprioDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ProdutoProprioDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProdutoProprioDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
