import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaAdsRedeDisplayProdutoProprioEditComponent } from './campanha-ads-rede-display-produto-proprio-edit.component';

describe('CampanhaAdsRedeDisplayProdutoProprioEditComponent', () => {
	let component: CampanhaAdsRedeDisplayProdutoProprioEditComponent;
	let fixture: ComponentFixture<CampanhaAdsRedeDisplayProdutoProprioEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CampanhaAdsRedeDisplayProdutoProprioEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CampanhaAdsRedeDisplayProdutoProprioEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
