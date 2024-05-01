import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAdsAnuncioMetricaListSimplesComponent } from './meta-ads-anuncio-metrica-list-simples.component';

describe('MetaAdsAnuncioMetricaListSimplesComponent', () => {
	let component: MetaAdsAnuncioMetricaListSimplesComponent;
	let fixture: ComponentFixture<MetaAdsAnuncioMetricaListSimplesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MetaAdsAnuncioMetricaListSimplesComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MetaAdsAnuncioMetricaListSimplesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
