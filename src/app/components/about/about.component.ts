import { SearchObserveService } from './../../services/search-observe.service';
import { RequestApiService } from './../../services/request-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  data:object = [];
  searchItem:string = '';
  p:number = 1;
  constructor(private request:RequestApiService, private  searchObv:SearchObserveService) {
    this.searchObv.getTextSearch$()
    .subscribe((data) => {
      this.searchItem = data;
    });
   }

  ngOnInit(): void {
    this.request.get('all')
    .subscribe((value:Object) => {
      this.data = value;
    });
  }

}
