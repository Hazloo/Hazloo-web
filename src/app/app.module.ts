import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SlideComponent } from './slide/slide.component';
import { PartnerComponent } from './partner/partner.component';
import { FooterComponent } from './footer/footer.component';
import { HazlooVideoComponent } from './hazloo-video/hazloo-video.component';
import { HazlooEventosComponent } from './hazloo-eventos/hazloo-eventos.component';
import { HazlooRapidoComponent } from './hazloo-rapido/hazloo-rapido.component';
import { HazlooConsultoriaComponent } from './hazloo-consultoria/hazloo-consultoria.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SlideComponent,
    PartnerComponent,
    FooterComponent,
    HazlooVideoComponent,
    HazlooEventosComponent,
    HazlooRapidoComponent,
    HazlooConsultoriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
