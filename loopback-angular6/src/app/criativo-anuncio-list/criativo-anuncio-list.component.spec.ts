import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriativoAnuncioListComponent } from './criativo-anuncio-list.component';

describe('CriativoAnuncioListComponent', () => {
	let component: CriativoAnuncioListComponent;
	let fixture: ComponentFixture<CriativoAnuncioListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CriativoAnuncioListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CriativoAnuncioListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
