import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job2Component } from './job2/job2.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Job2Component],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [Job2Component],
  bootstrap: [Job2Component]
})
export class Scenario2Module { }
