import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAdsAnuncioListComponent } from './meta-ads-anuncio-list.component';

describe('MetaAdsAnuncioListComponent', () => {
	let component: MetaAdsAnuncioListComponent;
	let fixture: ComponentFixture<MetaAdsAnuncioListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MetaAdsAnuncioListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MetaAdsAnuncioListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
