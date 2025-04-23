import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieListComponent } from './serie-list/serie-list.component';

@NgModule({
declarations: [
  AppComponent
],
imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  SerieListComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
