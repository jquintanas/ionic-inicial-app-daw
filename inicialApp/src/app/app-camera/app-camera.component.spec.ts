import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppCameraComponent } from './app-camera.component';

describe('AppCameraComponent', () => {
  let component: AppCameraComponent;
  let fixture: ComponentFixture<AppCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCameraComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
