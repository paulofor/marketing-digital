import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAdsPixelVendaEditComponent } from './meta-ads-pixel-venda-edit.component';

describe('MetaAdsPixelVendaEditComponent', () => {
	let component: MetaAdsPixelVendaEditComponent;
	let fixture: ComponentFixture<MetaAdsPixelVendaEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MetaAdsPixelVendaEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MetaAdsPixelVendaEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
