import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownusingserviceComponent } from './dropdownusingservice.component';

describe('DropdownusingserviceComponent', () => {
  let component: DropdownusingserviceComponent;
  let fixture: ComponentFixture<DropdownusingserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownusingserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownusingserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
