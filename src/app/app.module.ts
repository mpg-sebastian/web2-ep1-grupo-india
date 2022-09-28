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
import { MainHeaderComponent } from './common/main-header/main-header.component';

@NgModule({
  declarations: [
    MainHeaderComponent,
    AppComponent,
    MainFooterComponent,
    CarouselComponent,
    InicioComponent,
    WhatwedoComponent,
    BlackwhiteComponent
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
