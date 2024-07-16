import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkPublicoInteresseEditComponent } from './framework-publico-interesse-edit.component';

describe('FrameworkPublicoInteresseEditComponent', () => {
	let component: FrameworkPublicoInteresseEditComponent;
	let fixture: ComponentFixture<FrameworkPublicoInteresseEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ FrameworkPublicoInteresseEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FrameworkPublicoInteresseEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
