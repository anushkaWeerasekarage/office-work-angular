import { Component, OnInit, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { SearchHeroesPipe } from '../search-heroes.pipe';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']

})
export class SearchFilterComponent implements OnInit {

  heroes: any[] = [{name: 'hero1', age: 24, country: 'canada'},
           {name: 'hero2', age: 30, country: 'UK'},
           {name: 'hero3', age: 25, country: 'Australia'},
           {name: 'hero4', age: 54, country: 'Australia'},
           {name: 'hero5', age: 34, country: 'UK'}
];

testData: any[] = [{name: 'test1', id: 1, idArry:'1 2 3'},
                    {name: 'test2', id: 1, idArry:'2 1'}
];

labelArr: string[];

  constructor() { 
  
  }

  ngOnInit() {
    for(let i of this.testData) {
      console.log(i.idArry);
      let x = i.idArry;
      let y = x.split('');
      console.log(y);
      this.labelArr = this.getLabelArray(this.testData, y);
      console.log(this.labelArr);
    }
  }

  getLabelArray(arr1: any[], arr2: string[]): string[] {
    let arr: string[] = null;
    for(let i of arr2) {
      for(let j of arr1) {
        if(j != null && j.id == i){
          arr.push(j.name);
          return arr;
        }
        else 
        return arr;
      }
    }
  }
}
