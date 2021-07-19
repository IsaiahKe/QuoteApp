import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'QuoteApp';
  title = 'QuoteApp';
  color = 'light-blue';
  quotes: Quote[] = []
  constructor() { }
  toggleQuote(index: any) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails

  }
  deleteQuote(index: any) {
    this.quotes.splice(index, 1);
  }
  addNewQuote(quote: Quote) {

    let id = this.quotes.length + 1
    this.quotes.push(
      new Quote(id, 0, 0, quote.say, new Date(), quote.author, quote.userName)
    );
    quote.author = '';
    quote.say = ''
    quote.userName = '';

  }
  addVote(index: any) {
    this.quotes[index].upVote++;
  }
  reduceVote(index: any) {
    this.quotes[index].downVote++
  }
  getHighest(index: any) {
    Math.max(this.quotes[index].upVote);

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
