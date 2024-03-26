import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutProdutoProprioEditComponent } from './checkout-produto-proprio-edit.component';

describe('CheckoutProdutoProprioEditComponent', () => {
	let component: CheckoutProdutoProprioEditComponent;
	let fixture: ComponentFixture<CheckoutProdutoProprioEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CheckoutProdutoProprioEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CheckoutProdutoProprioEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
