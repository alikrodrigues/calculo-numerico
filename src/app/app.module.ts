import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';
import { ConversaoComponent } from './conversao/conversao.component';
import { BiseccaoComponent } from './biseccao/biseccao.component';


@NgModule({
  declarations: [
    AppComponent,
    ConversaoComponent,
    BiseccaoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
