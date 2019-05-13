import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatThemeComponent } from './mat-theme.component';

describe('MatThemeComponent', () => {
  let component: MatThemeComponent;
  let fixture: ComponentFixture<MatThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
