import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent implements OnChanges {
  myStringArray: string[];
  returnedString: string;
  @Input() inputNumber: number; 

  constructor(){
    this.myStringArray = ['First','Second','Third','Forth','Fifth','Sixth'];
    this.returnedString = 'number'+this.myStringArray[Number(this.inputNumber)];
  }

  ngOnChanges() {
    this.returnedString = 'number'+this.myStringArray[Number(this.inputNumber)];   
  }
}
