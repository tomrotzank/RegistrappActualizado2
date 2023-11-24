import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../servicios/autentication.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private contentElement: any;

  constructor(
    private animationCtrl: AnimationController,
    private router: Router,
    private authService: AuthenticationService,
    private alertController: AlertController
  ) {}

  user = {
    usuario: '',
    password: '',
  };

  ngOnInit() {
    this.contentElement = document.querySelector('.ion-content');
  }

  ionViewDidEnter() {
    this.playFadeInAnimation();
  }

  playFadeInAnimation() {
    if (this.contentElement) {
      const animation = this.animationCtrl
        .create()
        .addElement(this.contentElement)
        .duration(1000)
        .fromTo('opacity', '0', '1');

      animation.play();
    }
  }

  async enviarInfo() {
    const usuario = this.user.usuario;
    const password = this.user.password;

    if (await this.authService.login(usuario, password)) {
      const rol = this.authService.rol;

      if (rol === 'profesor') {
        this.router.navigate(['/feed']);
      } else if (rol === 'alumno') {
        this.router.navigate(['/feed']);
      }
    } else {
      // Credenciales incorrectas
      this.mostrarErrorAlert();
    }
  }

  async mostrarErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Credenciales incorrectas',
      message: 'El correo electrónico o la contraseña son erróneas. Vuelve a intentarlo',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            
            window.location.reload();
          },
        },
      ],
    });

    await alert.present();
  }
}
