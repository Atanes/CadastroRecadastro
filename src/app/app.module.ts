import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListagemComponent } from './cliente-listagem/cliente-listagem.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents:[ClienteListagemComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
