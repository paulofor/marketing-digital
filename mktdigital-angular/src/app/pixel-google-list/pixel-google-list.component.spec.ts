import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelGoogleListComponent } from './pixel-google-list.component';

describe('PixelGoogleListComponent', () => {
  let component: PixelGoogleListComponent;
  let fixture: ComponentFixture<PixelGoogleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelGoogleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelGoogleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
