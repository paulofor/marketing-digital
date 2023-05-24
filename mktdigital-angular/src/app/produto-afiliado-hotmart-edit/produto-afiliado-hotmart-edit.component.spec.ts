import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAfiliadoHotmartEditComponent } from './produto-afiliado-hotmart-edit.component';

describe('ProdutoAfiliadoHotmartEditComponent', () => {
  let component: ProdutoAfiliadoHotmartEditComponent;
  let fixture: ComponentFixture<ProdutoAfiliadoHotmartEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoAfiliadoHotmartEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoAfiliadoHotmartEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
