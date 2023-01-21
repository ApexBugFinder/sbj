import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewgameComponent } from '../newgame/newgame.component';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  startgamemodal() {
    console.log('throw modal');

    let config: MatDialogConfig;
    config = {
      width:'600px',
      hasBackdrop:true
    }

    const dialogRef = this.dialog.open(NewgameComponent, config)
  }
}
