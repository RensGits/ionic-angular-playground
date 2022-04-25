import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  mathCounter = 0;

  constructor() {}

  handleSubstraction(){
    this.mathCounter -= 1;
  }
  handleAddition(){
    this.mathCounter += 1;
  }

}
