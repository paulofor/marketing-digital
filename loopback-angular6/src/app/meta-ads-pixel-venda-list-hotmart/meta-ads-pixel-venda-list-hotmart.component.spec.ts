import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAdsPixelVendaListHotmartComponent } from './meta-ads-pixel-venda-list-hotmart.component';

describe('MetaAdsPixelVendaListHotmartComponent', () => {
	let component: MetaAdsPixelVendaListHotmartComponent;
	let fixture: ComponentFixture<MetaAdsPixelVendaListHotmartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MetaAdsPixelVendaListHotmartComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MetaAdsPixelVendaListHotmartComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
