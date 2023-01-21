import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class SharedModule { }
