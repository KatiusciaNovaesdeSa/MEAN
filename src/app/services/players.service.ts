import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  result:any;
  constructor(private http: HttpClient) { }
  addPlayer(playerName, rank,score,time,gamesPlayed,status,join) {
    const uri = '/players/add';
    const obj = {
      playerName:playerName ,
      rank:rank ,
      score:score,
      time:time ,
      gamesPlayed:gamesPlayed,
      status:status,
      join: join
    };
    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
  }
  getPlayers(){
    const uri = '/players';
    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
  }
  editPlayer(id) {
    const uri = '/players/edit/' + id;
    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
  }
  updatePlayer(playerName, rank, score, time, gamesPlayed,status, id) {
    const uri = '/players/update/' + id;

      const obj = {
        playerName:playerName ,
        rank:rank ,
        score:score,
        time:time ,
        gamesPlayed:gamesPlayed,
        status:status,
      };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }
  playerGame(id) {
    const uri = '/players/join/' + id;
    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
  }
  joinGame(playerName, rank, score, time, gamesPlayed,status, id) {
    const uri = '/players/joingame/' + id;

      const obj = {
        playerName:playerName ,
        rank:rank ,
        score:score,
        time:time ,
        gamesPlayed:gamesPlayed,
        status:status,
      };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }
  deletePlayer(id){
    const uri = '/players/delete/' + id;

    return this
        .http
        .get(uri)
        .pipe(map(res => {
          return res;
        }));
  }
}
