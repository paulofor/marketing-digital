import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerramentaIaEditComponent } from './ferramenta-ia-edit.component';

describe('FerramentaIaEditComponent', () => {
	let component: FerramentaIaEditComponent;
	let fixture: ComponentFixture<FerramentaIaEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ FerramentaIaEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FerramentaIaEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
