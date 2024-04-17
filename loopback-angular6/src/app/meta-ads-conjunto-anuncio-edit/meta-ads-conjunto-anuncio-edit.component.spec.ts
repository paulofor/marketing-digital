import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAdsConjuntoAnuncioEditComponent } from './meta-ads-conjunto-anuncio-edit.component';

describe('MetaAdsConjuntoAnuncioEditComponent', () => {
	let component: MetaAdsConjuntoAnuncioEditComponent;
	let fixture: ComponentFixture<MetaAdsConjuntoAnuncioEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MetaAdsConjuntoAnuncioEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MetaAdsConjuntoAnuncioEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
