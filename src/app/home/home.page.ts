import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Dyelson Motta - 01545962',
      buttons: ['OK'],
    });

    await alert.present();
  }

  navegar(rota: string) {
    this.router.navigate([rota]);
  }
}
