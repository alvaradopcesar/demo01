
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { TablaComponent } from './tabla/tabla.component';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule, routedComponents } from './app.routing';

import { PostService } from './../servicios/post.service';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    TablaComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
