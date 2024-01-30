import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoHotmartContaEditRelComponent } from './produto-hotmart-conta-edit-rel.component';

describe('ProdutoHotmartContaEditRelComponent', () => {
	let component: ProdutoHotmartContaEditRelComponent;
	let fixture: ComponentFixture<ProdutoHotmartContaEditRelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ProdutoHotmartContaEditRelComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProdutoHotmartContaEditRelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
