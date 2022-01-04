import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutertestComponent } from './routertest.component';

describe('RoutertestComponent', () => {
  let component: RoutertestComponent;
  let fixture: ComponentFixture<RoutertestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutertestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutertestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
