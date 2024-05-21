import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregavelProdutoListParaGerarListaComponent } from './entregavel-produto-list-para-gerar-lista.component';

describe('EntregavelProdutoListParaGerarListaComponent', () => {
	let component: EntregavelProdutoListParaGerarListaComponent;
	let fixture: ComponentFixture<EntregavelProdutoListParaGerarListaComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ EntregavelProdutoListParaGerarListaComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EntregavelProdutoListParaGerarListaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
