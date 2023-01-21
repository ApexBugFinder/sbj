import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/helpers/Constants';
import { DeckCard } from '../models/deckcard';
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';
import { Deck } from '../models/deck';

@Injectable({
  providedIn: 'root',
})
export class DeckCardService {
  private ctlrName;
  private apiRt;
  private apiAddress;
  private hdrs;
  private clientRt;
  constructor(private http: HttpClient) {
    this.ctlrName = 'deckcards/';
    this.apiRt = Constants.apiRoot;
    this.apiAddress = this.apiRt + this.ctlrName;
    this.hdrs = new HttpHeaders();
    this.clientRt = Constants.clientRoot;

  }




  // GET DEckcards by deckid
  public deckcardsbydeckid(deck_id: number | undefined): Observable<DeckCard[]> {
    const address = 'read/' + deck_id;
    const req_address = this.apiAddress + address;
    const hdrs = new HttpHeaders()
      .set('Access-Control-Allow-Origin', [
        this.apiRt,
        this.apiAddress,
        Constants.clientRoot,
      ])
      .set('Access-Control-Allow-Methods', 'GET')
      .set('content-type', 'application/json');

    return this.http.get<DeckCard[]>(
      req_address,
      { headers: hdrs }
    ).pipe(timeout(5000),
      map((deckcards: DeckCard[]) => {
        console.log('Deckcards returned by deck_id by deckcard service', JSON.stringify(deckcards))
        return deckcards
      }))
  }

}


