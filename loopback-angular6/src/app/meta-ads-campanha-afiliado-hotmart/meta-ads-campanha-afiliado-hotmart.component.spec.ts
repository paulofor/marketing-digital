import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAdsCampanhaAfiliadoHotmartComponent } from './meta-ads-campanha-afiliado-hotmart.component';

describe('MetaAdsCampanhaAfiliadoHotmartComponent', () => {
  let component: MetaAdsCampanhaAfiliadoHotmartComponent;
  let fixture: ComponentFixture<MetaAdsCampanhaAfiliadoHotmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaAdsCampanhaAfiliadoHotmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaAdsCampanhaAfiliadoHotmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
