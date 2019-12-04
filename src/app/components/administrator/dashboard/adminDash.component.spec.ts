import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashComponent } from './admDash.component';

describe('AdminComponent', () => {
  let component: AdminDashComponent;
  let fixture: ComponentFixture<AdminDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add', () => {
    expect(component).toBeTruthy();
  });
});
