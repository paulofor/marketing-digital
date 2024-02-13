import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaAdsRedeDisplayEditComponent } from './campanha-ads-rede-display-edit.component';

describe('CampanhaAdsRedeDisplayEditComponent', () => {
	let component: CampanhaAdsRedeDisplayEditComponent;
	let fixture: ComponentFixture<CampanhaAdsRedeDisplayEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CampanhaAdsRedeDisplayEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CampanhaAdsRedeDisplayEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
