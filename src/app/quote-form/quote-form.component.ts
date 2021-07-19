import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
 

  newQuote =new Quote(0,0,0,'',new Date(),'','');
  @Output() addQuote= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {}
  
  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }
}