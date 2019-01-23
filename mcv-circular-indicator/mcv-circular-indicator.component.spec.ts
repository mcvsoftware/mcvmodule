import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McvCircularIndicatorComponent } from './mcv-circular-indicator.component';

describe('McvCircularIndicatorComponent', () => {
  let component: McvCircularIndicatorComponent;
  let fixture: ComponentFixture<McvCircularIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McvCircularIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McvCircularIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
