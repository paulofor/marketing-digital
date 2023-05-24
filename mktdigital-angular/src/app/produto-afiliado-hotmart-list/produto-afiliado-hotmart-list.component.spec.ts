import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAfiliadoHotmartListComponent } from './produto-afiliado-hotmart-list.component';

describe('ProdutoAfiliadoHotmartListComponent', () => {
  let component: ProdutoAfiliadoHotmartListComponent;
  let fixture: ComponentFixture<ProdutoAfiliadoHotmartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoAfiliadoHotmartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoAfiliadoHotmartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
