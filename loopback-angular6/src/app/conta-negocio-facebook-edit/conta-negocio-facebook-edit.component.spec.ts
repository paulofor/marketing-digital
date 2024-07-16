import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaNegocioFacebookEditComponent } from './conta-negocio-facebook-edit.component';

describe('ContaNegocioFacebookEditComponent', () => {
	let component: ContaNegocioFacebookEditComponent;
	let fixture: ComponentFixture<ContaNegocioFacebookEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ContaNegocioFacebookEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContaNegocioFacebookEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
