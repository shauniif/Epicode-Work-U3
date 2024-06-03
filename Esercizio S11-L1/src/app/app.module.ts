import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main-components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DirectiverandomcolorDirective } from './Directives/directiverandomcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DirectiverandomcolorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
