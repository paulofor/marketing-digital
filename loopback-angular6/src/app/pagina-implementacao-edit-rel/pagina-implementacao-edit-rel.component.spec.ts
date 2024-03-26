import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaImplementacaoEditRelComponent } from './pagina-implementacao-edit-rel.component';

describe('PaginaImplementacaoEditRelComponent', () => {
	let component: PaginaImplementacaoEditRelComponent;
	let fixture: ComponentFixture<PaginaImplementacaoEditRelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaImplementacaoEditRelComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaImplementacaoEditRelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
