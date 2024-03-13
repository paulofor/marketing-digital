import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelGoogleProdutoProprioListComponent } from './pixel-google-produto-proprio-list.component';

describe('PixelGoogleProdutoProprioListComponent', () => {
	let component: PixelGoogleProdutoProprioListComponent;
	let fixture: ComponentFixture<PixelGoogleProdutoProprioListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PixelGoogleProdutoProprioListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PixelGoogleProdutoProprioListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
