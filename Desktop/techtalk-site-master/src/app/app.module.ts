import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { MapModule } from './shared/map/map.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatSnackBarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    MapModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    NgxPageScrollModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
