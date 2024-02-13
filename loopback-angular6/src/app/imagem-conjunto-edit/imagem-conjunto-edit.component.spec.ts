import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemConjuntoEditComponent } from './imagem-conjunto-edit.component';

describe('ImagemConjuntoEditComponent', () => {
	let component: ImagemConjuntoEditComponent;
	let fixture: ComponentFixture<ImagemConjuntoEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ImagemConjuntoEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ImagemConjuntoEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
