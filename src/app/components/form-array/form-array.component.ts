import {Component, OnInit} from '@angular/core';
import {FormArrayService} from '../../service/form-array-service/form-array.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../service/form-array-service/user.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  form: FormGroup;
  users: User[] = [];
  selectedFormule = 0;

  displayedColumns: string[] = ['id', 'userId', 'title'];

  constructor(private formArrayService: FormArrayService,
              private  userService: UserService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      albums: this.fb.array([]),
    });
    this.formArrayService.getAllAsFormArray().subscribe(albums => {
      this.form.setControl('albums', albums);
    });
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  get albums(): FormArray {
    return this.form.get('albums') as FormArray;
  }

  onUserChange(event, album: FormGroup) {
    const title = album.get('title');

    title.setValue(null);
    title.markAsUntouched();
  }

  radioChangeHandler(event: any) {
    this.selectedFormule = event.value;
    console.log('selectedFormule', this.selectedFormule);
  }

}
