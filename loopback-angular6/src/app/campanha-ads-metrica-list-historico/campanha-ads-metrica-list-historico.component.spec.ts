import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaAdsMetricaListHistoricoComponent } from './campanha-ads-metrica-list-historico.component';

describe('CampanhaAdsMetricaListHistoricoComponent', () => {
	let component: CampanhaAdsMetricaListHistoricoComponent;
	let fixture: ComponentFixture<CampanhaAdsMetricaListHistoricoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CampanhaAdsMetricaListHistoricoComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CampanhaAdsMetricaListHistoricoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
