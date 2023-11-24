import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../servicios/autentication.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  constructor(
    private animationCtrl: AnimationController,
    private router: Router,
    private authService: AuthenticationService,
    private alertController: AlertController) 
    { }

  ngOnInit() {
  }

}
