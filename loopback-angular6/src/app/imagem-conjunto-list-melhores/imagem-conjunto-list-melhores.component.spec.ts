import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemConjuntoListMelhoresComponent } from './imagem-conjunto-list-melhores.component';

describe('ImagemConjuntoListMelhoresComponent', () => {
	let component: ImagemConjuntoListMelhoresComponent;
	let fixture: ComponentFixture<ImagemConjuntoListMelhoresComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ImagemConjuntoListMelhoresComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ImagemConjuntoListMelhoresComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
