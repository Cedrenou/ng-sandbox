import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFormArrayComponent } from './team-form-array.component';

describe('TeamFormArrayComponent', () => {
  let component: TeamFormArrayComponent;
  let fixture: ComponentFixture<TeamFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
