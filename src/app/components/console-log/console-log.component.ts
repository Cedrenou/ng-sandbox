import {Component, OnInit} from '@angular/core';

const fruits = [
  'Apple',
  'Watermelon',
  'Orange',
  'Pear',
  'Cherry',
  'Strawberry',
  'Nectarine',
  'Grape',
  'Mango',
  'Blueberry',
  'Pomegranate',
  'Carambola',
  'Plum',
  'Banana',
  'Raspberry',
  'Mandarin',
  'Jackfruit',
  'Papaya',
  'Kiwi',
  'Pineapple',
  'Lime',
  'Lemon',
  'Apricot',
  'Grapefruit',
  'Melon',
  'Coconut',
  'Avocado',
  'Peach'
];

@Component({
  selector: 'app-console-log',
  templateUrl: './console-log.component.html',
  styleUrls: ['./console-log.component.scss']
})
export class ConsoleLogComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  sayHello(name) {
    // console.count permet de garder une trace de combien de fois a été appeler la fonction
    console.count(name); // ==> name: count
    if (!name) {
      // console.warn permet d'afficher un warning de couleur jaune dans la console
      console.warn('No name given');
    }
  }

  tableLog() {
    // Console table fonctionne aussi bien avec les tableau qu'avec les object, tres pratique pour afficher des donnné plus lisible
    console.table(fruits);
  }

  consoleGroup() {
    // Console group creer un niveau et groupEnd le termine, utile lorsque vous travaillez avec des données relationnelles.
    console.log('This is the first level');
    console.group();
    console.log('Level 2');
    console.group();
    console.log('Level 3');
    console.warn('More of level 3');
    console.groupEnd();
    console.log('Back to level 2');
    console.groupEnd();
    console.log('Back to the first level');
  }


}
