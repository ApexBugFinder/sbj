import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from 'src/app/helpers/Constants';
import { Router } from '@angular/router';
import { Observable, of, pipe} from 'rxjs';
import { map, timeout } from 'rxjs/operators';
import { Card } from '../models/card';


@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private ctlrName;
  private apiRt;
  private apiAddress;
  private hdrs;
  private clientRt;
  constructor(private http: HttpClient) {
        this.ctlrName = 'projects/';
        this.apiRt = Constants.apiRoot;
        this.apiAddress = this.apiRt + this.ctlrName;
        this.hdrs = new HttpHeaders();
        this.clientRt = Constants.clientRoot;

  }

  public readAll(): Observable<Card[]> {
    const address = 'read/all';
    const req_address = this.apiAddress + address
    const hdrs = new HttpHeaders()
      .set('Access-Control-Allow-Origin', [
        this.apiRt,
        this.apiAddress,
        Constants.clientRoot,
      ])
      .set('Access-Control-Allow-Methods', 'GET')
      .set('content-type', 'application/json');

    return this.http.get<Card[]>(
      req_address,
      { headers: hdrs }).pipe(
        timeout(5000),
        map((cards: Card[]) => {
          console.log('Cards returned: ', JSON.stringify(cards))
          return cards;
        }))
  }

  public readitem(card_id: number | undefined): Observable<Card> {
        const address = 'read/' + card_id;
        const req_address = this.apiAddress + address;
        const hdrs = new HttpHeaders()
          .set('Access-Control-Allow-Origin', [
            this.apiRt,
            this.apiAddress,
            Constants.clientRoot,
          ])
          .set('Access-Control-Allow-Methods', 'GET')
          .set('content-type', 'application/json');



    return this.http.get<Card>(
      req_address,
      { headers: hdrs }).pipe(
        timeout(5000),
        map((card: Card) => {
          console.log('Card returned by card service: ', JSON.stringify(card))
          return card
        })
      )
  }





}
