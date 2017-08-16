import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaeditComponent } from './tablaedit.component';

describe('TablaeditComponent', () => {
  let component: TablaeditComponent;
  let fixture: ComponentFixture<TablaeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
