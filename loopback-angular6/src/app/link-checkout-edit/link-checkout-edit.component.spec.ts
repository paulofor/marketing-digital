import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCheckoutEditComponent } from './link-checkout-edit.component';

describe('LinkCheckoutEditComponent', () => {
	let component: LinkCheckoutEditComponent;
	let fixture: ComponentFixture<LinkCheckoutEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ LinkCheckoutEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LinkCheckoutEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
