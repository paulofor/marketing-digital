import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaAdsMetricaListSimplesComponent } from './campanha-ads-metrica-list-simples.component';

describe('CampanhaAdsMetricaListSimplesComponent', () => {
	let component: CampanhaAdsMetricaListSimplesComponent;
	let fixture: ComponentFixture<CampanhaAdsMetricaListSimplesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CampanhaAdsMetricaListSimplesComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CampanhaAdsMetricaListSimplesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
