import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioConceitoAdsRedeDisplayEditComponent } from './anuncio-conceito-ads-rede-display-edit.component';

describe('AnuncioConceitoAdsRedeDisplayEditComponent', () => {
	let component: AnuncioConceitoAdsRedeDisplayEditComponent;
	let fixture: ComponentFixture<AnuncioConceitoAdsRedeDisplayEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AnuncioConceitoAdsRedeDisplayEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AnuncioConceitoAdsRedeDisplayEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
