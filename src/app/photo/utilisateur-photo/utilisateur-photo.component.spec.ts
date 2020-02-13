import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurPhotoComponent } from './utilisateur-photo.component';

describe('UtilisateurPhotoComponent', () => {
  let component: UtilisateurPhotoComponent;
  let fixture: ComponentFixture<UtilisateurPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
