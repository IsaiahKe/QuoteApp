import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'QuoteApp';
  quotes:Quote[]=[new Quote(0,0,"fake it until you make it",new Date(2021,7,16),"martin Luther","Morara")]
  constructor(){}
  
  deleteQuote(index:any){
    this.quotes.splice(index,1);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
