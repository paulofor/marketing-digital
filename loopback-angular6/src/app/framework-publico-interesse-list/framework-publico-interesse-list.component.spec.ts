import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkPublicoInteresseListComponent } from './framework-publico-interesse-list.component';

describe('FrameworkPublicoInteresseListComponent', () => {
	let component: FrameworkPublicoInteresseListComponent;
	let fixture: ComponentFixture<FrameworkPublicoInteresseListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ FrameworkPublicoInteresseListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FrameworkPublicoInteresseListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
