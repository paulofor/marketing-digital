import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAdsPixelVendaListComponent } from './meta-ads-pixel-venda-list.component';

describe('MetaAdsPixelVendaListComponent', () => {
	let component: MetaAdsPixelVendaListComponent;
	let fixture: ComponentFixture<MetaAdsPixelVendaListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MetaAdsPixelVendaListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MetaAdsPixelVendaListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
