import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrebuiltThemeComponent } from './prebuilt-theme.component';

describe('PrebuiltThemeComponent', () => {
  let component: PrebuiltThemeComponent;
  let fixture: ComponentFixture<PrebuiltThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrebuiltThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrebuiltThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
