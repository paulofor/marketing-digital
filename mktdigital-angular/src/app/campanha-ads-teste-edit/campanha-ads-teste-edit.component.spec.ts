import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaAdsTesteEditComponent } from './campanha-ads-teste-edit.component';

describe('CampanhaAdsTesteEditComponent', () => {
  let component: CampanhaAdsTesteEditComponent;
  let fixture: ComponentFixture<CampanhaAdsTesteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanhaAdsTesteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanhaAdsTesteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
