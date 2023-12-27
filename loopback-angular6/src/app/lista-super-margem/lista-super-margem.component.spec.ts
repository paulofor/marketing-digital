import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSuperMargemComponent } from './lista-super-margem.component';

describe('ListaSuperMargemComponent', () => {
	let component: ListaSuperMargemComponent;
	let fixture: ComponentFixture<ListaSuperMargemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ListaSuperMargemComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ListaSuperMargemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
