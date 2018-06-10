import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { ConversaoComponent } from './conversao/conversao.component';
import { BiseccaoComponent } from './biseccao/biseccao.component';
import {ConversaoService} from './conversao/conversao.service';
import { NewtonRaphsonComponent } from './newton-raphson/newton-raphson.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BiseccaoLocaComponent } from './biseccao-loca/biseccao-loca.component';


@NgModule({
  declarations: [
    AppComponent,
    ConversaoComponent,
    BiseccaoComponent,
    BiseccaoLocaComponent,
    NewtonRaphsonComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ConversaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
