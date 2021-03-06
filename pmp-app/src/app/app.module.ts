import { AngularIndexedDbService } from './shared/services/angular-indexeddb.service';
import { DatabaseService } from './shared/services/database.service';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CanDeactivate, Router, RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from './shared/services/can-deactivate-guard.service';
import { MsnTailService } from './shared/services/msn-tail.service';

import { HeaderComponent } from './core/header/header.component';
import { ConfigComponent } from './shared/components/config/config.component';
import { NewMsnComponent } from './core/msn/new-msn/new-msn.component';
import { HomeComponent } from './core/home/home.component';

import { MsnComponent } from './core/msn/msn.component';
import { MsnGeneralComponent } from './core/msn/msn-general/msn-general.component';
import { MsnAircrewComponent } from './core/msn/msn-aircrew/msn-aircrew.component';
import { MsnItineraryComponent } from './core/msn/msn-itinerary/msn-itinerary.component';
import { AddMsnAircrewComponent } from './core/msn/msn-aircrew/add-msn-aircrew/add-msn-aircrew.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'config', component: ConfigComponent },
  {
    path: 'msn', component: MsnComponent, children: [
      { path: 'general', component: MsnGeneralComponent, canDeactivate: [CanDeactivateGuard] },
      { path: 'aircrew', component: MsnAircrewComponent },
      { path: 'itinerary', component: MsnItineraryComponent },
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigComponent,
    NewMsnComponent,
    HeaderComponent,
    MsnGeneralComponent,
    MsnAircrewComponent,
    MsnItineraryComponent,
    MsnComponent,
    AddMsnAircrewComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
  ],
  providers: [AngularIndexedDbService, NgbActiveModal, DatabaseService, CanDeactivateGuard],
  bootstrap: [AppComponent],
  entryComponents: [ConfigComponent, AddMsnAircrewComponent, NewMsnComponent]
})
export class AppModule { }
