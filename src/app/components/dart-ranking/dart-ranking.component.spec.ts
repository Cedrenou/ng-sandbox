import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DartRankingComponent } from './dart-ranking.component';

describe('DartRankingComponent', () => {
  let component: DartRankingComponent;
  let fixture: ComponentFixture<DartRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DartRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DartRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
