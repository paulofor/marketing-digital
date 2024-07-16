import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessManagerEditComponent } from './business-manager-edit.component';

describe('BusinessManagerEditComponent', () => {
	let component: BusinessManagerEditComponent;
	let fixture: ComponentFixture<BusinessManagerEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ BusinessManagerEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BusinessManagerEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
