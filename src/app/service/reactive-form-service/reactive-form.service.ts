import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormService {

  nameEditorFormValue;

  constructor() {
  }

  getName(name) {
    this.nameEditorFormValue = name;
    console.log('nameEditorFormValue', this.nameEditorFormValue);
  }

}
