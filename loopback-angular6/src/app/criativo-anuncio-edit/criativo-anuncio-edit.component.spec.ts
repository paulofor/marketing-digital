import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriativoAnuncioEditComponent } from './criativo-anuncio-edit.component';

describe('CriativoAnuncioEditComponent', () => {
	let component: CriativoAnuncioEditComponent;
	let fixture: ComponentFixture<CriativoAnuncioEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CriativoAnuncioEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CriativoAnuncioEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
