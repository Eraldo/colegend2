import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { HomeComponent } from './home/home.component';
import { JourneyComponent } from './journey/journey.component';
import { VisionComponent } from './vision/vision.component';
import { JournalComponent } from './journal/journal.component';
import { ManagerComponent } from './manager/manager.component';
import { CommunityComponent } from './community/community.component';
import { SettingsComponent } from './settings/settings.component';
import { PartiesListComponent } from './parties/parties-list.component';
import { PartyDetailsComponent } from './parties/party-details.component';
import {SignupComponent} from "./auth/signup.component";
import {RecoverComponent} from "./auth/recover.component";
import {LoginComponent} from "./auth/login.component.web";

export const routes: Route[] = [
  { path: '', component: HomeComponent, data: { meta: { title: 'home' } } },
  { path: 'home', component: HomeComponent, data: { meta: { title: 'home' } } },
  { path: 'journey', component: JourneyComponent, data: { meta: { title: 'journey' } } },
  { path: 'vision', component: VisionComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'settings', component: SettingsComponent, data: { meta: { title: 'settings' } } },
  { path: 'parties', component: PartiesListComponent },
  { path: 'party/:partyId', component: PartyDetailsComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'recover', component: RecoverComponent }
];

export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];
