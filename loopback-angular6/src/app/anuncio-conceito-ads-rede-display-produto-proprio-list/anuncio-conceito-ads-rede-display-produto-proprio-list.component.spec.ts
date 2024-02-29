import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioConceitoAdsRedeDisplayProdutoProprioListComponent } from './anuncio-conceito-ads-rede-display-produto-proprio-list.component';

describe('AnuncioConceitoAdsRedeDisplayProdutoProprioListComponent', () => {
	let component: AnuncioConceitoAdsRedeDisplayProdutoProprioListComponent;
	let fixture: ComponentFixture<AnuncioConceitoAdsRedeDisplayProdutoProprioListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AnuncioConceitoAdsRedeDisplayProdutoProprioListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AnuncioConceitoAdsRedeDisplayProdutoProprioListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
