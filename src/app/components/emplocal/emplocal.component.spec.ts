import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplocalComponent } from './emplocal.component';

describe('EmplocalComponent', () => {
  let component: EmplocalComponent;
  let fixture: ComponentFixture<EmplocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
