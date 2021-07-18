import { Output } from '@angular/core';
import { Component, Input, OnInit,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
@Input() quote:any;
@Output() isDelete = new EventEmitter<boolean>();
  constructor() { }
 ngOnInit(): void {
  } 
   quoteDelete(remove:boolean){
     return this.isDelete.emit(remove);

   }  

}
