import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncioSessionComponent } from './incio-session.component';

describe('IncioSessionComponent', () => {
  let component: IncioSessionComponent;
  let fixture: ComponentFixture<IncioSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncioSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncioSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
