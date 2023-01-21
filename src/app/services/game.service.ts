import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from 'src/app/helpers/Constants';
import { Router } from '@angular/router';
import { Observable, of, pipe } from 'rxjs';
import { map, timeout } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  private ctlrName;
  private apiRt;
  private apiAddress;
  private hdrs;
  private clientRt;
  constructor() {}
}
