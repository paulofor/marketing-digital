import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAdsPublicoListComponent } from './meta-ads-publico-list.component';

describe('MetaAdsPublicoListComponent', () => {
	let component: MetaAdsPublicoListComponent;
	let fixture: ComponentFixture<MetaAdsPublicoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MetaAdsPublicoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MetaAdsPublicoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
