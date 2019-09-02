import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-x01',
  templateUrl: './x01.component.html',
  styleUrls: ['./x01.component.scss']
})
export class X01Component implements OnInit {
  styles = [
    {value: 301, viewValue: 301},
    {value: 501, viewValue: 501}
  ];

  gameStyle = new FormControl('');
  scoreToBeat = 301;

  constructor() {
  }

  ngOnInit() {
  }

  soustractValue(value) {
    let result = this.scoreToBeat;
    result = result - value;
    if (this.scoreToBeat < 0) {
      return;
    }
    this.scoreToBeat = result;
    console.log(result);
    return result;
  }

  consoleLog() {
    const formValue = this.gameStyle.value;
    console.log(formValue);
  }


}
