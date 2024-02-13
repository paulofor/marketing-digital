import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaAdsRedeDisplayPorProdutoListComponent } from './campanha-ads-rede-display-por-produto-list.component';

describe('CampanhaAdsRedeDisplayPorProdutoListComponent', () => {
	let component: CampanhaAdsRedeDisplayPorProdutoListComponent;
	let fixture: ComponentFixture<CampanhaAdsRedeDisplayPorProdutoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CampanhaAdsRedeDisplayPorProdutoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CampanhaAdsRedeDisplayPorProdutoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
