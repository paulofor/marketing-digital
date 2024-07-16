import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaNegocioFacebookListComponent } from './conta-negocio-facebook-list.component';

describe('ContaNegocioFacebookListComponent', () => {
	let component: ContaNegocioFacebookListComponent;
	let fixture: ComponentFixture<ContaNegocioFacebookListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ContaNegocioFacebookListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContaNegocioFacebookListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
