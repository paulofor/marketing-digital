import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioConceitoAdsRedeDisplayPorProdutoListComponent } from './anuncio-conceito-ads-rede-display-por-produto-list.component';

describe('AnuncioConceitoAdsRedeDisplayPorProdutoListComponent', () => {
	let component: AnuncioConceitoAdsRedeDisplayPorProdutoListComponent;
	let fixture: ComponentFixture<AnuncioConceitoAdsRedeDisplayPorProdutoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AnuncioConceitoAdsRedeDisplayPorProdutoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AnuncioConceitoAdsRedeDisplayPorProdutoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
