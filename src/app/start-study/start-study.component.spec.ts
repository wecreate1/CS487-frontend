import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartStudyComponent } from './start-study.component';

describe('StartStudyComponent', () => {
  let component: StartStudyComponent;
  let fixture: ComponentFixture<StartStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartStudyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
