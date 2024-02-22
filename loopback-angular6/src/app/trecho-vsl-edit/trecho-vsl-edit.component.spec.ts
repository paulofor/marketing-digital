import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrechoVslEditComponent } from './trecho-vsl-edit.component';

describe('TrechoVslEditComponent', () => {
	let component: TrechoVslEditComponent;
	let fixture: ComponentFixture<TrechoVslEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ TrechoVslEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TrechoVslEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
