import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatWidgetsComponent } from './mat-widgets.component';

describe('MatWidgetsComponent', () => {
  let component: MatWidgetsComponent;
  let fixture: ComponentFixture<MatWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
