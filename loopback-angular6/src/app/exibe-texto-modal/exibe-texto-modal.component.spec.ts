import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeTextoModalComponent } from './exibe-texto-modal.component';

describe('ExibeTextoModalComponent', () => {
  let component: ExibeTextoModalComponent;
  let fixture: ComponentFixture<ExibeTextoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibeTextoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibeTextoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
