import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerPhotoComponent } from './supprimer-photo.component';

describe('SupprimerPhotoComponent', () => {
  let component: SupprimerPhotoComponent;
  let fixture: ComponentFixture<SupprimerPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
