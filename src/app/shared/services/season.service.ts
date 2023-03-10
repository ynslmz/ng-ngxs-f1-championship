import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApiService } from './api.service';
import { StandingsList } from '../models/season.model';
import { map, Observable } from 'rxjs';
import { Main } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class SeasonService extends ApiService {

  constructor(http: HttpClient) {
    super(http)
  }

  getSeasons(): Observable<StandingsList[]> {
    return this.get<Main>('driverstandings/1.json?limit=30&offset=55').pipe(map((res: any) =>
      res.MRData.StandingsTable.StandingsLists
    ))
  }
}
