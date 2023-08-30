import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelGoogleEditComponent } from './pixel-google-edit.component';

describe('PixelGoogleEditComponent', () => {
	let component: PixelGoogleEditComponent;
	let fixture: ComponentFixture<PixelGoogleEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PixelGoogleEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PixelGoogleEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
