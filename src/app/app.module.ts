import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationsComponent } from './components/generations/generations.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokedexPipe } from './pipes/pokedex.pipe';
import localeFR from '@angular/common/locales/fr';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePokemonComponent } from './components/create-pokemon/create-pokemon.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthInterceptor } from './helper/auth.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';

registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    PokedexPipe,
    PokemonComponent,
    CreatePokemonComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'},AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
