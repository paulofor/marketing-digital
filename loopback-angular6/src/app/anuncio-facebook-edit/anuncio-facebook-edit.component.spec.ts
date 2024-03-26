import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioFacebookEditComponent } from './anuncio-facebook-edit.component';

describe('AnuncioFacebookEditComponent', () => {
	let component: AnuncioFacebookEditComponent;
	let fixture: ComponentFixture<AnuncioFacebookEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AnuncioFacebookEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AnuncioFacebookEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
