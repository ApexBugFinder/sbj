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
export class DeckService {
  private ctlrName;
  private apiRt;
  private apiAddress;
  private hdrs;
  private clientRt;
  constructor(private http: HttpClient) {
    this.ctlrName = 'decks/';
    this.apiRt = Constants.apiRoot;
    this.apiAddress = this.apiRt + this.ctlrName;
    this.hdrs = new HttpHeaders();
    this.clientRt = Constants.clientRoot;

  }

  public createDeck(): Observable<DeckCard[]> {
    const address = 'create';
    const req_address = this.apiAddress + address;
    const hdrs = new HttpHeaders()
      .set('Access-Control-Allow-Origin', [
        this.apiRt,
        this.apiAddress,
        Constants.clientRoot,
      ])
      .set('Access-Control-Allow-Methods', 'POST')
      .set('content-type', 'application/json');

    return this.http.post<DeckCard[]>(
      req_address,
      { headers: hdrs }
    ).pipe(
      timeout(5000),
      map((deckcards: DeckCard[]) => {
        console.log('Deckcards returned from create Deck: ', JSON.stringify(deckcards))
        return deckcards
      })
    )
  }

  // GET DEck By ID
  public deckbyid(deck_id: number | undefined): Observable<Deck> {
    const address = 'read/' + deck_id;
    const req_address = this.apiAddress + address;
    const hdrs = new HttpHeaders()
      .set('Access-Control-Allow-Origin', [
        this.apiRt,
        this.apiAddress,
        Constants.clientRoot,
      ])
      .set('Access-Control-Allow-Methods', 'POST')
      .set('content-type', 'application/json');


    return this.http.get<Deck>(
      req_address,
      { headers: hdrs }
    ).pipe(timeout(5000),
      map((deck: Deck) => {
        console.log('Deck returned from deckbyid in deckservice: ', JSON.stringify(deck));
        return deck;
      }

      ))

  }




}

