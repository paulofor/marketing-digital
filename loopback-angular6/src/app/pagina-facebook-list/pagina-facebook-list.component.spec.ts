import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFacebookListComponent } from './pagina-facebook-list.component';

describe('PaginaFacebookListComponent', () => {
	let component: PaginaFacebookListComponent;
	let fixture: ComponentFixture<PaginaFacebookListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaFacebookListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaFacebookListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
