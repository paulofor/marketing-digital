import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAdsConjuntoAnuncioDetalheComponent } from './meta-ads-conjunto-anuncio-detalhe.component';

describe('MetaAdsConjuntoAnuncioDetalheComponent', () => {
	let component: MetaAdsConjuntoAnuncioDetalheComponent;
	let fixture: ComponentFixture<MetaAdsConjuntoAnuncioDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MetaAdsConjuntoAnuncioDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MetaAdsConjuntoAnuncioDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
