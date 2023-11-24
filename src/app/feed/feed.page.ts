import { Component, NgModule, OnInit } from '@angular/core';
import { AuthenticationService } from '../servicios/autentication.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular'; // Importa NavController
import { Capacitor } from '@capacitor/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';  // Importa BarcodeScanner
import { Plugins } from '@capacitor/core';

const { TextToSpeech } = Plugins as any;



@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  
})
export class FeedPage implements OnInit {
  usuario: string = '';

  constructor(
    private authService: AuthenticationService,
    private router:Router
  ) {}

  verAsistencia(){
    this.router.navigate(['/asistencias']);
  }

  // Botón para volver atrás
  volverALogin(){
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    // El nombre de usuario se recuperará del servicio AuthenticationService
    const fullEmail = this.authService.username;
    const atIndex = fullEmail.indexOf('@'); // Encuentra la posición de la "@" en el correo

    if (atIndex !== -1) {
      // Si se encuentra la "@", obtén la parte del correo antes de la "@"
      this.usuario = fullEmail.substring(0, atIndex);
    } else {
      // Si no se encuentra la "@", utiliza el correo completo
      this.usuario = fullEmail;
    }
  }


  //Escanear QR
  async escanearQR() {
    if (Capacitor.isPluginAvailable('BarcodeScanner')) {
      try {
        const result = await BarcodeScanner.startScan();
        if (result.hasContent) {
          // Maneja el resultado del escaneo como desees,
          // en este caso, abre la URL escaneada en una nueva ventana.
          window.open(result.content, '_blank');
        }
      } catch (error) {
        console.error('Error al escanear:', error);
      }
    } else {
      console.warn('La funcionalidad de escaneo de QR solo está disponible en dispositivos nativos.');
    }
  }

}

