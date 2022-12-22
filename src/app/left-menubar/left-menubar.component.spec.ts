import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenubarComponent } from './left-menubar.component';

describe('LeftMenubarComponent', () => {
  let component: LeftMenubarComponent;
  let fixture: ComponentFixture<LeftMenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftMenubarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
