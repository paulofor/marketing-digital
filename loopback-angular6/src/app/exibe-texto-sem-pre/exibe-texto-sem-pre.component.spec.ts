import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeTextoSemPreComponent } from './exibe-texto-sem-pre.component';

describe('ExibeTextoSemPreComponent', () => {
  let component: ExibeTextoSemPreComponent;
  let fixture: ComponentFixture<ExibeTextoSemPreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibeTextoSemPreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibeTextoSemPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
