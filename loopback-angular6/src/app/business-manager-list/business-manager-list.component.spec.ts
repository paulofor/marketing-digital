import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessManagerListComponent } from './business-manager-list.component';

describe('BusinessManagerListComponent', () => {
	let component: BusinessManagerListComponent;
	let fixture: ComponentFixture<BusinessManagerListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ BusinessManagerListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BusinessManagerListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
