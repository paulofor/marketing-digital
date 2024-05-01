import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAdsCampanhaMetricaListSimplesComponent } from './meta-ads-campanha-metrica-list-simples.component';

describe('MetaAdsCampanhaMetricaListSimplesComponent', () => {
	let component: MetaAdsCampanhaMetricaListSimplesComponent;
	let fixture: ComponentFixture<MetaAdsCampanhaMetricaListSimplesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MetaAdsCampanhaMetricaListSimplesComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MetaAdsCampanhaMetricaListSimplesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
