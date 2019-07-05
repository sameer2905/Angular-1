import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent6Component } from './parent6/parent6.component';
import { Child6aComponent } from './child6a/child6a.component';
import { Child6bComponent } from './child6b/child6b.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Parent6Component, Child6aComponent, Child6bComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [Parent6Component, Child6aComponent, Child6bComponent],
  bootstrap: [Parent6Component, Child6aComponent, Child6bComponent]
})
export class Scenario6Module { }
