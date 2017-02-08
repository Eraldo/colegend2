import { Component } from '@angular/core';
import { Meteor } from 'meteor/meteor';

import style from './app.component.scss';
import template from './app.component.web.html';
import { InjectUser } from "angular2-meteor-accounts-ui";
import { MetaService } from 'ng2-meta';

@Component({
  selector: 'app',
  template,
  styles: [style]
})
@InjectUser('user')
export class AppComponent {
  navItems = [
    { name: 'Home', route: 'home', icon: 'home' },
    { name: 'Journey', route: 'journey' },
    { name: 'Vision', route: 'vision' },
    { name: 'Journal', route: 'journal' },
    { name: 'Manager', route: 'manager' },
    { name: 'Community', route: 'community' },
    { name: 'Settings', route: 'settings' },
    { name: 'Parties', route: 'parties' },
  ];

  constructor(private metaService: MetaService) {
  }

  logout() {
    Meteor.logout();
  }
}
