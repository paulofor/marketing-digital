import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioAdsDisplayPorProdutoListComponent } from './anuncio-ads-display-por-produto-list.component';

describe('AnuncioAdsDisplayPorProdutoListComponent', () => {
	let component: AnuncioAdsDisplayPorProdutoListComponent;
	let fixture: ComponentFixture<AnuncioAdsDisplayPorProdutoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AnuncioAdsDisplayPorProdutoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AnuncioAdsDisplayPorProdutoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
