import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAdsAnuncioEditComponent } from './meta-ads-anuncio-edit.component';

describe('MetaAdsAnuncioEditComponent', () => {
	let component: MetaAdsAnuncioEditComponent;
	let fixture: ComponentFixture<MetaAdsAnuncioEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MetaAdsAnuncioEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MetaAdsAnuncioEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
