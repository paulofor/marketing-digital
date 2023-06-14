import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaAdsTesteListaComponent } from './campanha-ads-teste-lista.component';

describe('CampanhaAdsTesteListaComponent', () => {
  let component: CampanhaAdsTesteListaComponent;
  let fixture: ComponentFixture<CampanhaAdsTesteListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanhaAdsTesteListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanhaAdsTesteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
