import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash/splash.component';
import { NewgameComponent } from './newgame/newgame.component';
import { SharedModule } from '../shared/shared.module';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';



@NgModule({
  declarations: [SplashComponent, NewgameComponent],
  imports: [CommonModule, SharedModule],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
  ],
})
export class WelcomeModule {}
