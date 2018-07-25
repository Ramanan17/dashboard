import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueLocalOnComponent } from './issue-local-on.component';

describe('IssueLocalOnComponent', () => {
  let component: IssueLocalOnComponent;
  let fixture: ComponentFixture<IssueLocalOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueLocalOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueLocalOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
