import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaAdsTesteListAtivaMetricaComponent } from './campanha-ads-teste-list-ativa-metrica.component';

describe('CampanhaAdsTesteListAtivaMetricaComponent', () => {
	let component: CampanhaAdsTesteListAtivaMetricaComponent;
	let fixture: ComponentFixture<CampanhaAdsTesteListAtivaMetricaComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CampanhaAdsTesteListAtivaMetricaComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CampanhaAdsTesteListAtivaMetricaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
