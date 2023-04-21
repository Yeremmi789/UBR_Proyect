import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaResetComponent } from './pregunta-reset.component';

describe('PreguntaResetComponent', () => {
  let component: PreguntaResetComponent;
  let fixture: ComponentFixture<PreguntaResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaResetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntaResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
