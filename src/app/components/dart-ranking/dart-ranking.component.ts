import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PlayerService} from './services/player.service';
import {Player} from './model/player.model';

@Component({
  selector: 'app-dart-ranking',
  templateUrl: './dart-ranking.component.html',
  styleUrls: ['./dart-ranking.component.scss']
})
export class DartRankingComponent implements OnInit {

  newPlayerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private playerService: PlayerService) {
  }

  ngOnInit() {
    this.newPlayerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.newPlayerForm.value);
    const firstName = this.newPlayerForm.get('firstName').value;
    const lastName = this.newPlayerForm.get('lastName').value;
    const player = new Player(firstName, lastName);
    this.playerService.createPlayer(player);
    this.newPlayerForm.reset();
  }

}
