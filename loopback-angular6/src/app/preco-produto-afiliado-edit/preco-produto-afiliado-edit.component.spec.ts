import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecoProdutoAfiliadoEditComponent } from './preco-produto-afiliado-edit.component';

describe('PrecoProdutoAfiliadoEditComponent', () => {
	let component: PrecoProdutoAfiliadoEditComponent;
	let fixture: ComponentFixture<PrecoProdutoAfiliadoEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PrecoProdutoAfiliadoEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PrecoProdutoAfiliadoEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
