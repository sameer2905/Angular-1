import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job2',
  template: `<input [(ngModel)]="name" type="text">
  {{name}}`,
  styleUrls: ['./job2.component.css']
})
export class Job2Component implements OnInit {
  public name="";
  constructor() { }

  ngOnInit() {
  }

}
