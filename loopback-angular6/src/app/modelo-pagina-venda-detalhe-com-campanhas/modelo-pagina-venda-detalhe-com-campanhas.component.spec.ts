import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloPaginaVendaDetalheComCampanhasComponent } from './modelo-pagina-venda-detalhe-com-campanhas.component';

describe('ModeloPaginaVendaDetalheComCampanhasComponent', () => {
	let component: ModeloPaginaVendaDetalheComCampanhasComponent;
	let fixture: ComponentFixture<ModeloPaginaVendaDetalheComCampanhasComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ModeloPaginaVendaDetalheComCampanhasComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ModeloPaginaVendaDetalheComCampanhasComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
