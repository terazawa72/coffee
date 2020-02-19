import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeViewComponent } from './coffee-view/coffee-view.component';


@NgModule({
  declarations: [
    AppComponent,
    CoffeeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    ClrIconModule,
    MatTableModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
