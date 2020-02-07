import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppercuPhotoComponent } from './appercu-photo.component';

describe('AppercuPhotoComponent', () => {
  let component: AppercuPhotoComponent;
  let fixture: ComponentFixture<AppercuPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppercuPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppercuPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
