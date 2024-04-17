import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaFacebookListComponent } from './conta-facebook-list.component';

describe('ContaFacebookListComponent', () => {
	let component: ContaFacebookListComponent;
	let fixture: ComponentFixture<ContaFacebookListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ContaFacebookListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContaFacebookListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
