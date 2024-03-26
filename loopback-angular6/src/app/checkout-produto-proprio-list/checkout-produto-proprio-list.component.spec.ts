import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutProdutoProprioListComponent } from './checkout-produto-proprio-list.component';

describe('CheckoutProdutoProprioListComponent', () => {
	let component: CheckoutProdutoProprioListComponent;
	let fixture: ComponentFixture<CheckoutProdutoProprioListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CheckoutProdutoProprioListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CheckoutProdutoProprioListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
