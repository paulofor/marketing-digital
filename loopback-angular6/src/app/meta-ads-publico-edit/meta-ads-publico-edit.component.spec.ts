import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAdsPublicoEditComponent } from './meta-ads-publico-edit.component';

describe('MetaAdsPublicoEditComponent', () => {
	let component: MetaAdsPublicoEditComponent;
	let fixture: ComponentFixture<MetaAdsPublicoEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MetaAdsPublicoEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MetaAdsPublicoEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
