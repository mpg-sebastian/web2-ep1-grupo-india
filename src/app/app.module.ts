import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { WhatwedoComponent } from './home/whatwedo/whatwedo.component';
import { BlackwhiteComponent } from './home/blackwhite/blackwhite.component';
import { WeareagencyComponent } from './home/weareagency/weareagency.component';
import { WhoareweComponent } from './home/whoarewe/whoarewe.component';
import { WetakeComponent } from './home/wetake/wetake.component';
import { TakealookComponent } from './home/takealook/takealook.component';
import { GetconnectedComponent } from './home/getconnected/getconnected.component';
import { WhatclientsComponent } from './home/whatclients/whatclients.component';
import { ContactComponent } from './home/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    CarouselComponent,
    InicioComponent,
    WhatwedoComponent,
    BlackwhiteComponent,
    WeareagencyComponent,
    WhoareweComponent,
    WetakeComponent,
    TakealookComponent,
    GetconnectedComponent,
    WhatclientsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
