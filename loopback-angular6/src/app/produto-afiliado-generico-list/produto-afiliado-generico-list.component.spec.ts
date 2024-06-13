import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAfiliadoGenericoListComponent } from './produto-afiliado-generico-list.component';

describe('ProdutoAfiliadoGenericoListComponent', () => {
	let component: ProdutoAfiliadoGenericoListComponent;
	let fixture: ComponentFixture<ProdutoAfiliadoGenericoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ProdutoAfiliadoGenericoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProdutoAfiliadoGenericoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
