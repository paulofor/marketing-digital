import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioAdsDisplayEditComponent } from './anuncio-ads-display-edit.component';

describe('AnuncioAdsDisplayEditComponent', () => {
	let component: AnuncioAdsDisplayEditComponent;
	let fixture: ComponentFixture<AnuncioAdsDisplayEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AnuncioAdsDisplayEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AnuncioAdsDisplayEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
