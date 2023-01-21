import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/helpers/Constants';

@Injectable({
  providedIn: 'root',
})
export class HandService {
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

  public getHandStatus(hand_id: Number | undefined) {
    return
  }
}
