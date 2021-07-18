import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuoteApp';
  quotes:Quote[]=[new Quote(3,4,"fake ituntil you make it",new Date(2021,7,16),"martin Luther","Morara")]
}
