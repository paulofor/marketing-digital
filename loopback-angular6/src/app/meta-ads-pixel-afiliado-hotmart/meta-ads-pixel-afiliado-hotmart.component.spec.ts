import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAdsPixelAfiliadoHotmartComponent } from './meta-ads-pixel-afiliado-hotmart.component';

describe('MetaAdsPixelAfiliadoHotmartComponent', () => {
  let component: MetaAdsPixelAfiliadoHotmartComponent;
  let fixture: ComponentFixture<MetaAdsPixelAfiliadoHotmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaAdsPixelAfiliadoHotmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaAdsPixelAfiliadoHotmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
