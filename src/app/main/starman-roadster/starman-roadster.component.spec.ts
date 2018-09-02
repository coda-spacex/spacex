import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarmanRoadsterComponent } from './starman-roadster.component';

describe('StarmanRoadsterComponent', () => {
  let component: StarmanRoadsterComponent;
  let fixture: ComponentFixture<StarmanRoadsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarmanRoadsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarmanRoadsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
