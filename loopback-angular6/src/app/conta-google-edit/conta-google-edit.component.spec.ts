import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaGoogleEditComponent } from './conta-google-edit.component';

describe('ContaGoogleEditComponent', () => {
	let component: ContaGoogleEditComponent;
	let fixture: ComponentFixture<ContaGoogleEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ContaGoogleEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContaGoogleEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
