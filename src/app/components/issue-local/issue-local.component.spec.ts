import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueLocalComponent } from './issue-local.component';

describe('IssueLocalComponent', () => {
  let component: IssueLocalComponent;
  let fixture: ComponentFixture<IssueLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
