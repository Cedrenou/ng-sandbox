import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayRefactoComponent } from './form-array-refacto.component';

describe('FormArrayRefactoComponent', () => {
  let component: FormArrayRefactoComponent;
  let fixture: ComponentFixture<FormArrayRefactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArrayRefactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayRefactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
