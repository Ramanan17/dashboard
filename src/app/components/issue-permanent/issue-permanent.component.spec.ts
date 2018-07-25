import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuePermanentComponent } from './issue-permanent.component';

describe('IssuePermanentComponent', () => {
  let component: IssuePermanentComponent;
  let fixture: ComponentFixture<IssuePermanentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuePermanentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuePermanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
