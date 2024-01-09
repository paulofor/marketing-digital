import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoWebEditComponent } from './secao-web-edit.component';

describe('SecaoWebEditComponent', () => {
	let component: SecaoWebEditComponent;
	let fixture: ComponentFixture<SecaoWebEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ SecaoWebEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SecaoWebEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
