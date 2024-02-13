import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoProprioVersaoDetalheComponent } from './produto-proprio-versao-detalhe.component';

describe('ProdutoProprioVersaoDetalheComponent', () => {
	let component: ProdutoProprioVersaoDetalheComponent;
	let fixture: ComponentFixture<ProdutoProprioVersaoDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ProdutoProprioVersaoDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProdutoProprioVersaoDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
