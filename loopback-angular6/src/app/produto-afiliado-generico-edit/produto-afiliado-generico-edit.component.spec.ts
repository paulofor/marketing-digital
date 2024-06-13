import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAfiliadoGenericoEditComponent } from './produto-afiliado-generico-edit.component';

describe('ProdutoAfiliadoGenericoEditComponent', () => {
	let component: ProdutoAfiliadoGenericoEditComponent;
	let fixture: ComponentFixture<ProdutoAfiliadoGenericoEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ProdutoAfiliadoGenericoEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProdutoAfiliadoGenericoEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
