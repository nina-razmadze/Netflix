import { HomeEmailInputComponent } from './features/home/components/home-email-input/home-email-input.component';
import { SelectLengBtnComponent } from './shared/components/select-leng-btn/select-leng-btn.component';
import { PrimaryButtonComponent } from './shared/components/primary-button/primary-button.component';
import { QuestionsTableComponent } from './features/home/components/questions-table/questions-table.component';
import { AccordionComponent } from './features/home/components/questions-table/accordion/accordion.component';
import { QuestionComponent } from './features/home/components/questions-table/question/question.component';
import { InfoLineComponent } from './features/home/components/info-line/info-line.component';
import { AuthenticationModule } from './features/authentication/authentication.module';

import { InterceptorsComponent } from './core/interceptors/interceptors.component';
import { CoreModule } from './core/core.module';
import { ComponentsComponent } from './shared/components/components.component';
import { DirectivesComponent } from './shared/directives/directives.component';

import { FooterComponent } from './shared/components/footer/footer.component';
import { ServicesComponent } from './core/services/services.component';

import { GuardsComponent } from './core/guards/guards.component';
import { ModelsComponent } from './core/models/models.component';

import { PipesComponent } from './shared/pipes/pipes.component';
import { HomeComponent } from './features/home/home.component';
import { SharedComponent } from './shared/shared.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CoreComponent } from './core/core.component';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HeaderComponent } from './features/dashboard/header/header.component';

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
    HomeComponent,
    HomeEmailInputComponent,
    InfoLineComponent,
    QuestionsTableComponent,
    AccordionComponent,
    QuestionComponent,
    FooterComponent,
    DashboardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AuthenticationModule,
    SharedModule,
    FormsModule,
  ],
  providers: [CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
