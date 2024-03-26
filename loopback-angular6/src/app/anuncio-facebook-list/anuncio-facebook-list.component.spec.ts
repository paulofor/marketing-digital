import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioFacebookListComponent } from './anuncio-facebook-list.component';

describe('AnuncioFacebookListComponent', () => {
	let component: AnuncioFacebookListComponent;
	let fixture: ComponentFixture<AnuncioFacebookListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AnuncioFacebookListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AnuncioFacebookListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
