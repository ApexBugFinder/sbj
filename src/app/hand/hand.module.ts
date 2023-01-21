import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandstatusComponent } from './handstatus/handstatus.component';
import { HandbuttonsComponent } from './handbuttons/handbuttons.component';
import { CardsComponent } from './cards/cards.component';
import { ResultsComponent } from './results/results.component';
import { ShellComponent } from './shell/shell.component';
import { SharedModule } from '../shared/shared.module';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CardsModule } from '../cards/cards.module';



@NgModule({
  declarations: [
    HandstatusComponent,
    HandbuttonsComponent,
    CardsComponent,
    ResultsComponent,
    ShellComponent,
  ],
  imports: [CommonModule, SharedModule, CardsModule],
  exports: [
    HandstatusComponent,
    HandbuttonsComponent,
    CardsComponent,
    ResultsComponent,
    ShellComponent,
  ],
})
export class HandModule {}
