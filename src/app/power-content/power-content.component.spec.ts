import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerContentComponent } from './power-content.component';

describe('PowerContentComponent', () => {
  let component: PowerContentComponent;
  let fixture: ComponentFixture<PowerContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
