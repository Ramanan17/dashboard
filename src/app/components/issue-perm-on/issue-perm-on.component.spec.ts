import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuePermOnComponent } from './issue-perm-on.component';

describe('IssuePermOnComponent', () => {
  let component: IssuePermOnComponent;
  let fixture: ComponentFixture<IssuePermOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuePermOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuePermOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
