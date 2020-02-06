import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichagePhotoComponent } from './affichage-photo.component';

describe('AffichagePhotoComponent', () => {
  let component: AffichagePhotoComponent;
  let fixture: ComponentFixture<AffichagePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichagePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichagePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
