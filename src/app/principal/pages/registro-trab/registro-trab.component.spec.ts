import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTrabComponent } from './registro-trab.component';

describe('RegistroTrabComponent', () => {
  let component: RegistroTrabComponent;
  let fixture: ComponentFixture<RegistroTrabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroTrabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
