import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from 'src/app/helpers/Constants';
import { Router } from '@angular/router';
import { Observable, of, pipe } from 'rxjs';
import { map, timeout } from 'rxjs/operators';
import { Game} from './models/game'
import { PlayerShellComponent } from './table-shell/player-shell/player-shell.component';
import { Player } from './user/models/player';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  private ctlrName;
  private apiRt;
  private apiAddress;
  private hdrs;
  private clientRt;
  constructor(private http: HttpClient) {
    this.ctlrName = 'games/';
    this.apiRt = Constants.apiRoot;
    this.apiAddress = this.apiRt + this.ctlrName;
    this.hdrs = new HttpHeaders();
    this.clientRt = Constants.clientRoot;
  }

  public create(player: Player, dealer: Player ): Observable<Game> {

    let item = {
      "player.id": player.id,
      "dealer.id": dealer.id
    }

    const address = 'create_game/';
    const req_address = this.apiAddress + address;
    const hdrs = new HttpHeaders()
      .set('Access-Control-Allow-Origin', [
        this.apiRt,
        this.apiAddress,
        Constants.clientRoot,
      ])
      .set('Access-Control-Allow-Methods', 'POST')
      .set('content-type', 'application/json');




    return this.http.post<Game>(
      req_address,
      item,
      {headers: hdrs}
    ).pipe(
      timeout(8000),
      map((newgame: Game) => {
        console.log('new Game started: ', newgame)
        return newgame;
      })
    );
  }
}

