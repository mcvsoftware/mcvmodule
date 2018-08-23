import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowScreenComponent } from './shadow-screen.component';

describe('ShadowScreenComponent', () => {
  let component: ShadowScreenComponent;
  let fixture: ComponentFixture<ShadowScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
