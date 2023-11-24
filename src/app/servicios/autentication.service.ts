import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

interface User {
  username: string;
  password: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public autenticado: boolean = false;
  public rol: string = '';
  public username: string = ''; // Agrega la propiedad username

  private local!: Storage;

  constructor(
     private router: Router,
     private storage: Storage) {
      
    this.init(); // variable inicializadora
  }


  
  async init() {
    const storage = await this.storage.create();
    this.local = storage;

    const users: User[] = [
      {
        username: 'dontaka@profesor.duoc.cl',
        password: 'taka123',
        rol: 'profesor',
      },
      {
        username: 'luartegay@profesor.duoc.cl',
        password: 'luartegay',
        rol: 'profesor',
      },
      {
        username: 'di.sanchez@duocuc.cl',
        password: 'diego123',
        rol: 'alumno',
      },
      {
        username: 'tom.figueroa@duocuc.cl',
        password: 'tomas123',
        rol: 'alumno',
      },
    ];

    await this.local.set('users', users);
  }



  async login(username: string, password: string): Promise<boolean> {
    if (!this.local) {
      return false; // Manejo de error: almacenamiento no inicializado
    }

    const users: User[] = (await this.local.get('users')) || [];
    const user = users.find((us) => us.username === username && us.password === password);

    if (user) {
      this.autenticado = true;
      this.rol = user.rol;
      this.username = user.username; // Asigna el valor del nombre de usuario

      return true;
    }

    this.autenticado = false;
    return false;
  }



  //LOGOUT DE LA APLICACIÓN

  logout() {
    this.autenticado = false;
    this.rol = '';
    this.router.navigate(['/login']);
  }

  async verificarCorreo(correo: string): Promise<boolean> {
    const users: User[] = (await this.local.get('users')) || [];
    const correoExistente = users.some((us) => us.username === correo);
    return correoExistente;
  }
}
