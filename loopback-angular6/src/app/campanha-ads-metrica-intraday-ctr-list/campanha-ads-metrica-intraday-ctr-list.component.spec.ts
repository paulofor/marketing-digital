import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaAdsMetricaIntradayCtrListComponent } from './campanha-ads-metrica-intraday-ctr-list.component';

describe('CampanhaAdsMetricaIntradayCtrListComponent', () => {
	let component: CampanhaAdsMetricaIntradayCtrListComponent;
	let fixture: ComponentFixture<CampanhaAdsMetricaIntradayCtrListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CampanhaAdsMetricaIntradayCtrListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CampanhaAdsMetricaIntradayCtrListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
