import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaInstagramListComponent } from './conta-instagram-list.component';

describe('ContaInstagramListComponent', () => {
	let component: ContaInstagramListComponent;
	let fixture: ComponentFixture<ContaInstagramListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ContaInstagramListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContaInstagramListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
