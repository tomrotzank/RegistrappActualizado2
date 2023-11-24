import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TriangleComponent } from './components/triangle/triangle.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainFormComponent } from './components/main-form/main-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    TriangleComponent,
    MainTitleComponent,
    MainFormComponent,
  ],
  exports:[
    HeaderComponent,
    TriangleComponent,
    MainTitleComponent,
    MainFormComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ]
})
export class SharedModule { }
