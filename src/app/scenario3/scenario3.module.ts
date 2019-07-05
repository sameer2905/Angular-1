import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [ParentComponent, ChildComponent],
  bootstrap: [ParentComponent, ChildComponent]
})
export class Scenario3Module { }
