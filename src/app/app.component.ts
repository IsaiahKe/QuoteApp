import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'QuoteApp';
  title='QuoteApp';
  quotes:Quote[]=[new Quote(1,0,0,"fake it until you make it",new Date(2021,7,16),"martin Luther","Morara")]
  constructor(){}
  toggleQuote(index:any){
    this.quotes[index].showDetails=!this.quotes[index].showDetails
    
  }
  deleteQuote(index:any){
    this.quotes.splice(index,1);
  }
  addNewQuote(quote:Quote){
    const quoteLength=this.quotes.length;
    quote.id=quoteLength +1;
    quote.postTime=new Date(quote.postTime);
    this.quotes.push(quote);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
