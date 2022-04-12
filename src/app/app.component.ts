import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Salut';
  fruits : any[] = [
    {
      "name" : "Mandarine",
      "price" : 0.85,
      "origin" : "SPAIN"
    },
    {
      "name" : "Poire",
      "price" : 1.75,
      "origin" : "BELGIUM"
    },
    {
      "name" : "Pomme",
      "price" : 2.56,
      "origin" : "FRANCE"
    }
  ];

}
