import {Component, OnInit} from '@angular/core';
import {Garantie} from '../../models/garantie.model';
import {FormControl, FormGroup} from '@angular/forms';


const GARANTIES_DATA: Garantie[] = [
  {
    position: 0,
    name: 'Garanties',
    additionalInfo: 'radio',
  },
  {
    position: 1,
    name: 'Responsabilité Civile',
    formuleOne: true,
    formuleTwo: true,
    formuleThree: true,
    isDisabled: true
  }, {
    position: 2,
    name: 'Défense Pénale et Recours Suite à Accident',
    formuleOne: true,
    formuleTwo: true,
    formuleThree: true,
    isDisabled: true
  }, {
    position: 3,
    name: 'Force de la nature',
    formuleTwo: true,
    formuleThree: true,
    isDisabled: true
  }, {
    position: 4,
    name: 'Catastrophe Naturelle',
    formuleTwo: true,
    formuleThree: true,
    isDisabled: true
  }, {
    position: 5,
    name: 'Catastrophe Technologique',
    formuleTwo: true,
    formuleThree: true,
    isDisabled: true
  },
  {
    position: 6,
    name: 'Bris de Glace',
    formuleTwo: true,
    formuleThree: true,
    isDisabled: true
  },
  {
    position: 7,
    name: 'Vol y compris vol isolé des éléments extérieurs',
    formuleTwo: true,
    formuleThree: true,
    isDisabled: true
  },
  {
    position: 8,
    name: 'Incendie',
    formuleTwo: true,
    formuleThree: true,
    isDisabled: true
  },
  {
    position: 9,
    name: 'Vandalisme, DTA',
    formuleThree: true,
    isDisabled: true
  },
  {
    position: 10,
    name: 'Perte financière',
    formuleThree: false,
    isDisabled: false
  },
  {
    position: 11,
    name: 'Date de fin de crédit',
    formuleThree: true,
    additionalInfo: 'date',
    isDisabled: true
  },
  {
    position: 12,
    name: 'Accessoires et aménagements',
    formuleTwo: true,
    formuleThree: true,
    additionalInfo: 'input',
    isDisabled: true
  },
  {
    position: 13,
    name: 'Contenu privé et professionnel',
    formuleTwo: true,
    formuleThree: true,
    additionalInfo: 'enum',
    isDisabled: true
  },
  {
    position: 14,
    name: 'Pack valeur à neuf',
    formuleThree: true,
    additionalInfo: 'month',
    isDisabled: true
  }, {
    position: 15,
    name: 'Indemnisation en valeur majorée',
    formuleTwo: true,
    formuleThree: true,
    additionalInfo: 'date',
    isDisabled: true
  }, {
    position: 16,
    name: 'Garantie du Conducteur',
    additionalInfo: 'garantieConducteur',
    isDisabled: true
  }, {
    position: 17,
    name: 'Rupture d’activité',
    formuleThree: true,
    isDisabled: true
  },
];

@Component({
  selector: 'app-form-array-refacto',
  templateUrl: './form-array-refacto.component.html',
  styleUrls: ['./form-array-refacto.component.scss']
})
export class FormArrayRefactoComponent implements OnInit {

  private garanties = GARANTIES_DATA;
  garantieForm: FormGroup;
  displayedColumns: string[] = ['name', 'formuleOne', 'formuleTwo', 'formuleThree', 'infoComplementaire'];

  constructor() {
  }

  ngOnInit() {
    this.garantieForm = new FormGroup({
      i: new FormControl('')
    });
  }

}
