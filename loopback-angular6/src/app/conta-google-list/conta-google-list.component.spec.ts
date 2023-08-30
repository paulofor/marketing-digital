import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaGoogleListComponent } from './conta-google-list.component';

describe('ContaGoogleListComponent', () => {
	let component: ContaGoogleListComponent;
	let fixture: ComponentFixture<ContaGoogleListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ContaGoogleListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContaGoogleListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
