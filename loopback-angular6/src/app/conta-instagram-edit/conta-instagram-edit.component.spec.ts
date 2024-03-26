import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaInstagramEditComponent } from './conta-instagram-edit.component';

describe('ContaInstagramEditComponent', () => {
	let component: ContaInstagramEditComponent;
	let fixture: ComponentFixture<ContaInstagramEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ContaInstagramEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContaInstagramEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
