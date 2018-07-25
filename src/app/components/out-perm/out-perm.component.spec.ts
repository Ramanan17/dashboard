import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutPermComponent } from './out-perm.component';

describe('OutPermComponent', () => {
  let component: OutPermComponent;
  let fixture: ComponentFixture<OutPermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutPermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutPermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
