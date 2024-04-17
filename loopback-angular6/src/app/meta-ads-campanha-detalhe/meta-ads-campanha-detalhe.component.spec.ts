import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAdsCampanhaDetalheComponent } from './meta-ads-campanha-detalhe.component';

describe('MetaAdsCampanhaDetalheComponent', () => {
	let component: MetaAdsCampanhaDetalheComponent;
	let fixture: ComponentFixture<MetaAdsCampanhaDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MetaAdsCampanhaDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MetaAdsCampanhaDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
