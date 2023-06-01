import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { FatherComponent } from './components/father/father.component';
import { ChildComponent } from './components/child/child.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ServicesApiComponent } from './components/services-api/services-api.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    FatherComponent,
    ChildComponent,
    DiretivasComponent,
    EventosComponent,
    ServicesApiComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
