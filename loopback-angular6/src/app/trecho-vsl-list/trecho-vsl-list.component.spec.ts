import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrechoVslListComponent } from './trecho-vsl-list.component';

describe('TrechoVslListComponent', () => {
	let component: TrechoVslListComponent;
	let fixture: ComponentFixture<TrechoVslListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ TrechoVslListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TrechoVslListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
