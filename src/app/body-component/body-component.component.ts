import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.css']
})

  export class BodyComponentComponent implements OnInit {
  title: string = "spandana"
  data = ["c",
    "del",
    "%",
    "+",
    1,
    2,
    3,
    "-",
    4,
    5,
    6,
    "*",
    7,
    8,
    9,
    "/",
    0,
    "00",
    ".",
    "="]
  constructor() { }



   ngOnInit(): void {    
      
   }

 }
