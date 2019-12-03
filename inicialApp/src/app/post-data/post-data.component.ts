import { Component, OnInit } from '@angular/core';
import { ServiceEstudiantesService } from '../services/service-estudiantes.service';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss'],
})
export class PostDataComponent implements OnInit {
  public estudiante = {
    matricula: "",
    nombre: "",
    semestre: ""
  }
  private toastConfig = {
    message: 'Your settings have been saved.',
    duration: 2000
  }
  public respuesta = {};
  public bandera: boolean;
  constructor(private _Estudiante: ServiceEstudiantesService, public alertController: AlertController, private toastController: ToastController) {
    this.bandera = false;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Datos a guardar.' + JSON.stringify(this.estudiante),
      buttons: [{
        text: 'No',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          this.bandera = false;
        }
      }, {
        text: 'Si',
        handler: async () => {
          await this._Estudiante.postData(this.estudiante).toPromise().then(data => {
            if (data.status == 500) {
              this.bandera = false;
              this.toastConfig.message = "Algo salió mal!!!";
              this.presentToast(this.toastConfig);
            }
            else {
              this.bandera = true;
              this.respuesta = data;
              this.estudiante.matricula = "";
              this.estudiante.nombre = "";
              this.estudiante.semestre = "";
              this.toastConfig.message = "Estudiante creado con éxito!!!";
              this.presentToast(this.toastConfig);
            }
          }).catch(err => {
            console.log(err);
            this.toastConfig.message = "Algo salió mal!!!";
            this.presentToast(this.toastConfig);
          });
        }
      }]
    });

    await alert.present();
  }

  async presentToast(config: any) {
    const toast = await this.toastController.create(config);
    toast.present();
  }
  ngOnInit() { }

  async postData() {
    this.presentAlert();
  }
}
