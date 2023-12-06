import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaAdsMetricaIntradayListSimplesComponent } from './campanha-ads-metrica-intraday-list-simples.component';

describe('CampanhaAdsMetricaIntradayListSimplesComponent', () => {
	let component: CampanhaAdsMetricaIntradayListSimplesComponent;
	let fixture: ComponentFixture<CampanhaAdsMetricaIntradayListSimplesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CampanhaAdsMetricaIntradayListSimplesComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CampanhaAdsMetricaIntradayListSimplesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
