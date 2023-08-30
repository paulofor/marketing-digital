import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaAdsTesteDetalheComponent } from './campanha-ads-teste-detalhe.component';

describe('CampanhaAdsTesteDetalheComponent', () => {
  let component: CampanhaAdsTesteDetalheComponent;
  let fixture: ComponentFixture<CampanhaAdsTesteDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanhaAdsTesteDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanhaAdsTesteDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
