// Libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routers
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './templates/cards/app.component';

// Components
import { NewGameComponent } from './modules/game/pages/new-game/new-game.component';

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
