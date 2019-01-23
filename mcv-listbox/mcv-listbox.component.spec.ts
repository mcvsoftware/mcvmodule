import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McvListboxComponent } from './mcv-listbox.component';

describe('McvListboxComponent', () => {
  let component: McvListboxComponent;
  let fixture: ComponentFixture<McvListboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McvListboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McvListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
