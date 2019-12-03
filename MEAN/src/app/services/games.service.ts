import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  result:any;
  constructor(private http: HttpClient) { }
  getGames(){
    const uri = 'https://fullstack-proj-katiuscia.herokuapp.com/games';
    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
  }
  joinGame(id) {
    const uri = 'https://fullstack-proj-katiuscia.herokuapp.com/players/join/' + id;
    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
  }
}
