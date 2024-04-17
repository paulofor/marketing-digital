import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAdsCampanhaEditComponent } from './meta-ads-campanha-edit.component';

describe('MetaAdsCampanhaEditComponent', () => {
	let component: MetaAdsCampanhaEditComponent;
	let fixture: ComponentFixture<MetaAdsCampanhaEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MetaAdsCampanhaEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MetaAdsCampanhaEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
