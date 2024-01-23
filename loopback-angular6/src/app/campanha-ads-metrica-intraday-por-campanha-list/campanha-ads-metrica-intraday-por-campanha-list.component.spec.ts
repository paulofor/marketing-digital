import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaAdsMetricaIntradayPorCampanhaListComponent } from './campanha-ads-metrica-intraday-por-campanha-list.component';

describe('CampanhaAdsMetricaIntradayPorCampanhaListComponent', () => {
	let component: CampanhaAdsMetricaIntradayPorCampanhaListComponent;
	let fixture: ComponentFixture<CampanhaAdsMetricaIntradayPorCampanhaListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CampanhaAdsMetricaIntradayPorCampanhaListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CampanhaAdsMetricaIntradayPorCampanhaListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
