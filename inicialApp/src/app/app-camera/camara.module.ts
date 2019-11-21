import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AppCameraComponent } from './app-camera.component';

@NgModule({
  declarations: [AppCameraComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppCameraComponent
      }
    ])
  ]
})
export class CamaraModule { }
