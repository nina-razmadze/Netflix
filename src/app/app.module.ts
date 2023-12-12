import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { InterceptorsComponent } from './core/interceptors/interceptors.component';

import { ComponentsComponent } from './shared/components/components.component';
import { DirectivesComponent } from './shared/directives/directives.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ServicesComponent } from './core/services/services.component';

import { FeaturesComponent } from './features/features.component';
import { GuardsComponent } from './core/guards/guards.component';
import { ModelsComponent } from './core/models/models.component';

import { PipesComponent } from './shared/pipes/pipes.component';
import { HomeComponent } from './features/home/home.component';
import { SharedComponent } from './shared/shared.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreComponent } from './core/core.component';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeEmailInputComponent } from './features/home/components/home-email-input/home-email-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    ServicesComponent,
    GuardsComponent,
    InterceptorsComponent,
    ModelsComponent,
    SharedComponent,
    ComponentsComponent,
    DirectivesComponent,
    PipesComponent,
    FeaturesComponent,
    HomeComponent,
    UserProfileComponent,
    HeaderComponent,
    FooterComponent,
    HomeEmailInputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
