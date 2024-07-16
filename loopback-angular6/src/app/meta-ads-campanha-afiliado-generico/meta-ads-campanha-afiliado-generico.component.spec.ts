import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAdsCampanhaAfiliadoGenericoComponent } from './meta-ads-campanha-afiliado-generico.component';

describe('MetaAdsCampanhaAfiliadoGenericoComponent', () => {
  let component: MetaAdsCampanhaAfiliadoGenericoComponent;
  let fixture: ComponentFixture<MetaAdsCampanhaAfiliadoGenericoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaAdsCampanhaAfiliadoGenericoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaAdsCampanhaAfiliadoGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
