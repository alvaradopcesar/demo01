import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { TablaComponent } from './tabla/tabla.component';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule, routedComponents } from './app.routing';

import { PostService } from './../servicios/post.service';
import { TablaeditComponent } from './tabla/tablaedit/tablaedit.component';
import { DoblePipe } from './doble.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    TablaComponent,
    routedComponents,
    TablaeditComponent,
    DoblePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
