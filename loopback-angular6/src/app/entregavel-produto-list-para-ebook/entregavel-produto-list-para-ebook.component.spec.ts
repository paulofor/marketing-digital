import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregavelProdutoListParaEbookComponent } from './entregavel-produto-list-para-ebook.component';

describe('EntregavelProdutoListParaEbookComponent', () => {
	let component: EntregavelProdutoListParaEbookComponent;
	let fixture: ComponentFixture<EntregavelProdutoListParaEbookComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ EntregavelProdutoListParaEbookComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EntregavelProdutoListParaEbookComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
