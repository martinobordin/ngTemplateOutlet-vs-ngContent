import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedContentComponent } from './nested-content.component';

describe('NestedContentComponent', () => {
  let component: NestedContentComponent;
  let fixture: ComponentFixture<NestedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
