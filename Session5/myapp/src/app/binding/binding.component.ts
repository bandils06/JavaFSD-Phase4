import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products=[{name:"Product A", price:"3620", available:"Y", ratings:4.4},
            {name:"Product B", price:"500", available:"Y", ratings:3.1},
            {name:"Product C", price:"2220", available:"N", ratings:4.9},
            {name:"Product D", price:"140", available:"Y", ratings:3.6},
            {name:"Product E", price:"2100", available:"N", ratings:4.2}
  ]

  name:string="Hrithik Bandil"
  url:string="www.google.com"
}
