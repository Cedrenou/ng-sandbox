import {Injectable} from '@angular/core';
import {Player} from '../model/player.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: Player[] = [];
  playersSubject = new Subject<Player[]>();

  constructor() {
  }

  emitPlayers() {
    this.playersSubject.next(this.players);
  }

  savePlayers() {
    // firebase.database().ref('/players').set(this.players);
  }

  createPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
    this.savePlayers();
    this.emitPlayers();
  }

  deletePlayer(player: Player) {
    // TODO
  }
}
