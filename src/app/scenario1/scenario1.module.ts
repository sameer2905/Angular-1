import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job1Component } from './job1/job1.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [Job1Component],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[Job1Component],
  bootstrap: [Job1Component]

})
export class Scenario1Module { }
