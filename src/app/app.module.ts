import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ObrasComponent } from './components/obras/obras.component';
import { ObraComponent } from './components/obra/obra.component';
import { ObrasService } from './services/obras.service';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ObrasComponent,
    ObraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    ObrasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
