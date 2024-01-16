import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaAdsExperimentoEditComponent } from './campanha-ads-experimento-edit.component';

describe('CampanhaAdsExperimentoEditComponent', () => {
	let component: CampanhaAdsExperimentoEditComponent;
	let fixture: ComponentFixture<CampanhaAdsExperimentoEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CampanhaAdsExperimentoEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CampanhaAdsExperimentoEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
