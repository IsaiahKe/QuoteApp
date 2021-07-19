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

    let id=this.quotes.length+1
    this.quotes.push(
      new Quote(id,0,0,quote.say,new Date(),quote.author,quote.userName)
    );
    quote.author='';
    quote.say=''
    quote.userName='';
    
  }
  addVote(index:any){
    this.quotes[index].upVote+1;
  }
  reducevote(index:any){
    this.quotes[index].downVote+1
  }
 
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
