import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAdsCampanhaListComponent } from './meta-ads-campanha-list.component';

describe('MetaAdsCampanhaListComponent', () => {
	let component: MetaAdsCampanhaListComponent;
	let fixture: ComponentFixture<MetaAdsCampanhaListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MetaAdsCampanhaListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MetaAdsCampanhaListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
