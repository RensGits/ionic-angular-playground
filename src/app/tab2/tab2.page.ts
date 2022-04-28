import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  mathCounter = 0;

  constructor() {}

  handleSubtraction(){
    this.mathCounter -= 1;
  }
  handleAddition(){
    this.mathCounter += 1;
  }

  setClasses(){
    const myClasses={
      rowstyle1: this.mathCounter % 2 === 0,
      rowstyle2: this.mathCounter % 2 !== 0,
    };
    return myClasses;
  }

}
