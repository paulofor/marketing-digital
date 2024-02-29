import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaAdsRedeDisplayProdutoProprioListComponent } from './campanha-ads-rede-display-produto-proprio-list.component';

describe('CampanhaAdsRedeDisplayProdutoProprioListComponent', () => {
	let component: CampanhaAdsRedeDisplayProdutoProprioListComponent;
	let fixture: ComponentFixture<CampanhaAdsRedeDisplayProdutoProprioListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CampanhaAdsRedeDisplayProdutoProprioListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CampanhaAdsRedeDisplayProdutoProprioListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
