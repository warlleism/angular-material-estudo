import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './content/components/first-component/first-component.component';
import { FatherComponent } from './content/components/father/father.component';
import { ChildComponent } from './content/components/child/child.component';
import { DiretivasComponent } from './content/components/diretivas/diretivas.component';
import { EventosComponent } from './content/components/eventos/eventos.component';
import { ServicesApiComponent } from './content/components/services-api/services-api.component';
import { EmiterComponent } from './content/components/emiter/emiter.component';
import { ChamgeNumberComponent } from './content/components/chamge-number/chamge-number.component';
import { ListRenderComponent } from './content/components/list-render/list-render.component';
import { PipesComponent } from './content/components/pipes/pipes.component';
import { HomeComponent } from './content/pages/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    FatherComponent,
    ChildComponent,
    DiretivasComponent,
    EventosComponent,
    ServicesApiComponent,
    EmiterComponent,
    ChamgeNumberComponent,
    ListRenderComponent,
    PipesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
