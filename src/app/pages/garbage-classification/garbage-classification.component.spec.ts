import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GarbageClassificationComponent} from './garbage-classification.component';

describe('GarbageClassificationComponent', () => {
  let component: GarbageClassificationComponent;
  let fixture: ComponentFixture<GarbageClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GarbageClassificationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarbageClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
