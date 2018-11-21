import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FateDisplayComponent } from './fate-display.component';

describe('FateDisplayComponent', () => {
  let component: FateDisplayComponent;
  let fixture: ComponentFixture<FateDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FateDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
