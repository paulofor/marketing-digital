import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAfiliadoTrabalhoComponent } from './produto-afiliado-trabalho.component';

describe('ProdutoAfiliadoTrabalhoComponent', () => {
	let component: ProdutoAfiliadoTrabalhoComponent;
	let fixture: ComponentFixture<ProdutoAfiliadoTrabalhoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ProdutoAfiliadoTrabalhoComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProdutoAfiliadoTrabalhoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
