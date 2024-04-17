import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaFacebookEditComponent } from './conta-facebook-edit.component';

describe('ContaFacebookEditComponent', () => {
	let component: ContaFacebookEditComponent;
	let fixture: ComponentFixture<ContaFacebookEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ContaFacebookEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContaFacebookEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
