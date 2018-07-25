import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutLocalComponent } from './out-local.component';

describe('OutLocalComponent', () => {
  let component: OutLocalComponent;
  let fixture: ComponentFixture<OutLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
