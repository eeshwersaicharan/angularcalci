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

    state ={

      operand: "" as any,
      upperdisplay: "" as any,
      lowerdisplay: "" as any,
      exceeded: "" as any,
      operator: "" as any

    };

    clear = () => {
    
      this.state.operand="",
      this.state.operator= "",
      this.state.upperdisplay="",
      this.state.lowerdisplay= ""
  };
  backspace = () => {
   
    this.state.upperdisplay= this.state.upperdisplay.slice(0, -1)
  
  };
  lowerDisplay = (splittedNumber:any) => {
    let res 
    if (this.state.operator === "+") {
      res = splittedNumber[0]+splittedNumber[1];
      // let num = splittedNumber.reduce((a, b) => a + b);
      this.state.lowerdisplay= res 
    }
    if (this.state.operator === "-") {
      res = splittedNumber[0]-splittedNumber[1];
      // let num = splittedNumber.reduce((a, b) => a - b);
      this.state.lowerdisplay=res;
    }
    if (this.state.operator === "*") {
      res = splittedNumber[0]*splittedNumber[1];
      // let num = splittedNumber.reduce((a, b) => a * b);
      this.state. lowerdisplay=res;
    }
    if (this.state.operator === "/") {
      res = splittedNumber[0]/splittedNumber[1];
      // let num = splittedNumber.reduce((a, b) => a / b);
      this.state.lowerdisplay= res ;
    }
    if (this.state.operator === "%") {
      res = splittedNumber[0]%splittedNumber[1];
      // let num = splittedNumber.reduce((a, b) => a % b);
      this.state.lowerdisplay=res
    }
  };

    add = (event:any) => {
      let value = event.target.value;
      if (value === "=") {
        
        let splittedValue = this.state.upperdisplay.split(this.state.operator);
        console.log(splittedValue)
        const splittedNumber = splittedValue.map((e:any)=>e = parseInt(e))
        this.lowerDisplay(splittedNumber);
        
      }
      if (value === "+") {
        this.state.upperdisplay= this.state.upperdisplay + value,
        this.state.operator=value
        
     
      }
      if (value === "-") {
        
          this.state.upperdisplay= this.state.upperdisplay + value,
          this.state.operator= value
        
      }
      if (value === "*") {
   
          this.state.upperdisplay= this.state.upperdisplay + value,
          this.state.operator= value
       
      }
      if (value === "%") {
        
          this.state.upperdisplay= this.state.upperdisplay + value,
          this.state.operator=value
        
      }
      if (value === "/") {
       
          this.state.upperdisplay= this.state.upperdisplay + value,
          this.state.operator= value
      
      } else if (value === "c") {
        this.clear();
      } else if (value === "del") {
        this.backspace();
      } else if (
        value === "1" ||
        value === "2" ||
        value === "3" ||
        value === "4" ||
        value === "5" ||
        value === "6" ||
        value === "7" ||
        value === "8" ||
        value === "9" ||
        
        value === "0" ||
        value === "."
      ) {
        this.state.upperdisplay=this.state.upperdisplay + value 
  
        if (this.state.upperdisplay.length > 10) {
          this.state.exceeded= "Limit exceeded" 
        }
      }
    };


   ngOnInit(): void {    
      
   }

 }
