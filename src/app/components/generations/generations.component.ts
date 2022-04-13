import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  generation : any[] = [
    {"name":"Génération I"},
    {"name":"Génération II"},
    {"name":"Génération III"},
    {"name":"Génération IV"},
    {"name":"Génération V"},
    {"name":"Génération VI"},
    {"name":"Génération VII"},
    {"name":"Génération VIII"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
