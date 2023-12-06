import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoPorCodigoAdsComponent } from './historico-por-codigo-ads.component';

describe('HistoricoPorCodigoAdsComponent', () => {
	let component: HistoricoPorCodigoAdsComponent;
	let fixture: ComponentFixture<HistoricoPorCodigoAdsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ HistoricoPorCodigoAdsComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HistoricoPorCodigoAdsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
