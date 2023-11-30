import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoObtemProximoTrabalhoComponent } from './produto-obtem-proximo-trabalho.component';

describe('ProdutoObtemProximoTrabalhoComponent', () => {
	let component: ProdutoObtemProximoTrabalhoComponent;
	let fixture: ComponentFixture<ProdutoObtemProximoTrabalhoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ProdutoObtemProximoTrabalhoComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProdutoObtemProximoTrabalhoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
