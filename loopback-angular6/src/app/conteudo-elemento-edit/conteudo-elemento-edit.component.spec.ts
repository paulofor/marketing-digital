import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoElementoEditComponent } from './conteudo-elemento-edit.component';

describe('ConteudoElementoEditComponent', () => {
	let component: ConteudoElementoEditComponent;
	let fixture: ComponentFixture<ConteudoElementoEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ConteudoElementoEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ConteudoElementoEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
