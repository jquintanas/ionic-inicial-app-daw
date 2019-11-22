import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-app-camera',
  templateUrl: './app-camera.component.html',
  styleUrls: ['./app-camera.component.scss'],
})
export class AppCameraComponent implements OnInit {
  public foto: any;
  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit: false,
    saveToPhotoAlbum: true,
    sourceType: this.camera.PictureSourceType.CAMERA
  }
  constructor(private camera: Camera) { }

  ngOnInit() { }

  tomarFoto() {
    this.options.sourceType = this.camera.PictureSourceType.CAMERA;
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log(err);
    });
  }

  buscarFoto() {
    this.options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
    this.camera.getPicture(this.options).then(imageData => {
      this.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err => {
      console.log(err);
    }))
  }
}
