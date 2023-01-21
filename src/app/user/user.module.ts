import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './login/sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SidenavComponent, LoginComponent],

  entryComponents: [
    LoginComponent,
    SidenavComponent
  ]
})
export class UserModule { }
