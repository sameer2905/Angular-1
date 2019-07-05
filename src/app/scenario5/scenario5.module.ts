import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child5Component } from './child5/child5.component';
import { Parent5Component } from './parent5/parent5.component';
import { GrandparentComponent } from './grandparent/grandparent.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Child5Component, Parent5Component, GrandparentComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [Child5Component, Parent5Component, GrandparentComponent],
  bootstrap: [Child5Component, Parent5Component, GrandparentComponent]
})
export class Scenario5Module { }
