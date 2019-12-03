import { Component, OnInit } from '@angular/core';
import { ServiceEstudiantesService } from '../services/service-estudiantes.service';
import { Estudiante } from '../models/Estudiantes';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.scss'],
})
export class GetApiComponent implements OnInit {
  public datos: any;
  private bandera: boolean;
  private dataInterna:Array<Estudiante>
  constructor(private _Estudiante: ServiceEstudiantesService, public alertController: AlertController) {
    this.dataInterna = new Array();
    this.bandera = false;
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Se encontró 100 elementos, quieres mostrarlos?',
      buttons: [{
        text: 'No',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          this.bandera = false;
          this.datos = null;
        }
      }, {
        text: 'Si',
        handler: () => {
          this.bandera = true;
          this.datos = this.dataInterna;
        }
      }]
    });

    await alert.present();
  }
  ngOnInit() { }

  async getData() {
    this.presentAlert();
    await this._Estudiante.getData().toPromise().then(data => {
        for (let i = 0; i < 100; i++) {
          this.dataInterna.push(data[i]);
        }
    }).catch(err => {
      console.log(err);
    });
  }
}
