import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriativoAnuncioDetalheComponent } from './criativo-anuncio-detalhe.component';

describe('CriativoAnuncioDetalheComponent', () => {
	let component: CriativoAnuncioDetalheComponent;
	let fixture: ComponentFixture<CriativoAnuncioDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CriativoAnuncioDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CriativoAnuncioDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
