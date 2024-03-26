import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFacebookEditComponent } from './pagina-facebook-edit.component';

describe('PaginaFacebookEditComponent', () => {
	let component: PaginaFacebookEditComponent;
	let fixture: ComponentFixture<PaginaFacebookEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaFacebookEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaFacebookEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
