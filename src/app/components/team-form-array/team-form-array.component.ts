import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

const MOCK_VALUE = [
  {
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    firstName: 'Michell',
    lastName: 'Berger'
  },
  {
    firstName: 'Giscard',
    lastName: 'Destaing'
  },
  {
    firstName: 'Jacques',
    lastName: 'Chirac'
  }
];

@Component({
  selector: 'app-team-form-array',
  templateUrl: './team-form-array.component.html',
  styleUrls: ['./team-form-array.component.scss']
})
export class TeamFormArrayComponent implements OnInit {

  teamForm: FormGroup;
  allTeamDetails = MOCK_VALUE;

  constructor(private fb: FormBuilder) {
    this.teamForm = this.fb.group({
      memberDetails: this.fb.array([])
    });
  }

  ngOnInit() {
    this.teamForm = this.fb.group({
      memberDetails: this.fb.array(
        this.allTeamDetails.map(x => this.fb.group({
          firstName: [x.firstName, [Validators.required, Validators.minLength(2)]],
          lastName: [x.lastName, [Validators.required, Validators.minLength(5)]]
        }))
      )
    });
  }

}
