import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { AuthenticationService } from '../servicios/autentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  correoRecuperacion: string = '';

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async verificarCorreoRecuperacion() {
    const correoExistente = await this.authService.verificarCorreo(this.correoRecuperacion);

    if (correoExistente) {
      // Si el correo se encuentra dentro del proyecto, redirige al usuario a la página de confirmación.
      this.router.navigate(['/confirmacion-restablecer']);
    } else {
      // Si el correo no se encuentra, muestra un pop-up de error
      this.mostrarErrorAlert();
    }
  }

  // Botón para volver atrás
  volverALogin(){
    this.router.navigate(['/login']);
  }

  // Alerta para error de Credenciales
  async mostrarErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Correo no encontrado.',
      message: 'Verifica e intenta de nuevo.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
