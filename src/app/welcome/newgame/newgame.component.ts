import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GameService } from 'src/app/game.service';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import { PlayerService } from 'src/app/user/services/player.service';

@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.scss']
})
export class NewgameComponent implements OnInit {

  dealerName: string;
  visitorplayerName: string;
  dealer$: Observable<Player>;
  vPlayer$: Observable<Player>;
  dealer: Player;
  player: Player;
  constructor(private dialogRef: MatDialogRef<NewgameComponent>,
    private playerService: PlayerService,
    private gameService: GameService,
    private router: Router) {
    this.visitorplayerName = 'test_player';
    this.dealerName = 'dealer';
    this.dealer = defaultPlayer;
    this.player = defaultPlayer;
    this.vPlayer$ = this.playerService.getPlayerByName(this.visitorplayerName);
    this.dealer$ = this.playerService.getPlayerByName(this.dealerName);
    }

  ngOnInit(): void {
  }


  game() {
    console.log('ATTEMPTING TO START NEW GAME');
    this.getVisitorGamePlayers();
    if (this.dealer != defaultPlayer && this.player!= defaultPlayer) {
      

    }

  }

  login() {

  }

  getVisitorGamePlayers() {
    this.vPlayer$.subscribe(p => {
      this.player = p;
    })
    this.dealer$.subscribe(p => {
      this.dealer = p;
  })

  }


}
