import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappGrupoPorProdutoListComponent } from './whatsapp-grupo-por-produto-list.component';

describe('WhatsappGrupoPorProdutoListComponent', () => {
	let component: WhatsappGrupoPorProdutoListComponent;
	let fixture: ComponentFixture<WhatsappGrupoPorProdutoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WhatsappGrupoPorProdutoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhatsappGrupoPorProdutoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
