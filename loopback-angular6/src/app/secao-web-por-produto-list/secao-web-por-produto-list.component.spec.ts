import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoWebPorProdutoListComponent } from './secao-web-por-produto-list.component';

describe('SecaoWebPorProdutoListComponent', () => {
	let component: SecaoWebPorProdutoListComponent;
	let fixture: ComponentFixture<SecaoWebPorProdutoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ SecaoWebPorProdutoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SecaoWebPorProdutoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
